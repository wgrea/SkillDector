// src/components/auth/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./authUtils";
import { login, logout } from "./authUtils";
import { User, Session } from "@supabase/supabase-js";
import { track } from "@/lib/analytics";

// Utility functions (would be in separate utils file)
const hashEmail = (email: string) => {
  // Simple hash for demo - use crypto.subtle in production
  return btoa(email).slice(0, 16);
};

const getDeviceFingerprint = () => {
  return navigator?.userAgent || 'unknown';
};

const isTokenExpired = (token: string) => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp < Date.now() / 1000;
  } catch {
    return true;
  }
};

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<{ user: User | null; session: Session | null }>;
  logout: () => Promise<void>;
  validateSession: () => Promise<boolean>;
  saveUserProgress: (progressData: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [sessionTimer, setSessionTimer] = useState<NodeJS.Timeout>();

  const trackedLogin = async (email: string, password: string) => {
    const startTime = performance.now();
    
    try {
      track('auth:login_attempt', { 
        email_hash: hashEmail(email),
        device_id: getDeviceFingerprint() 
      });
      
      const result = await login(email, password);
      
      if (result.user) {
        track('auth:login_success', {
          user_id: result.user.id,
          duration_ms: performance.now() - startTime
        });
        
        // Start session timer
        setSessionTimer(setInterval(() => {
          track('auth:session_heartbeat', {
            user_id: result.user?.id,
            duration_min: Math.floor((performance.now() - startTime) / 60000)
          });
        }, 300000)); // 5 min intervals
      }
      
      return result;
    } catch (error: any) {
      track('auth:login_failed', {
        error_code: error.status || 'unknown',
        auth_method: 'email_password',
        duration_ms: performance.now() - startTime
      });
      throw error;
    }
  };

  const trackedLogout = async () => {
    if (sessionTimer) clearInterval(sessionTimer);
    
    track('auth:logout_start', { user_id: user?.id });
    const startTime = performance.now();
    
    await logout();
    
    track('auth:logout_success', {
      duration_ms: performance.now() - startTime
    });
  };

  // Update the validateSession implementation
  const validateSession = async (): Promise<boolean> => {
    const startTime = performance.now();
    
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        track('auth:session_validation_failed', {
          error: error.message,
          duration_ms: performance.now() - startTime
        });
        return false; // Explicitly return false on error
      }
      
      const isValid = Boolean(session && !isTokenExpired(session.access_token));
      track('auth:session_checked', {
        is_valid: isValid,
        duration_ms: performance.now() - startTime
      });
      
      return isValid;
    } catch {
      return false; // Fail-safe return
    }
  };

  const saveUserProgress = async (progressData: any) => {
    if (!await validateSession()) {
      track('progress:save_attempt_without_session');
      throw new Error('Invalid session');
    }

    try {
      track('progress:save_start', {
        steps_count: progressData.steps?.length || 0
      });
      
      // Your save logic here
      // await supabase.from('user_progress').upsert(...);
      
      track('progress:save_success');
    } catch (error: any) {
      track('progress:save_failed', {
        error: error.message
      });
      throw error;
    }
  };

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user || null);
      
      if (data.session) {
        track('auth:session_recovered', {
          user_id: data.session.user.id
        });
      }
    };

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
      
      switch (event) {
        case 'SIGNED_IN':
          track('auth:session_active', { user_id: session?.user.id });
          break;
        case 'SIGNED_OUT':
          if (sessionTimer) clearInterval(sessionTimer);
          track('auth:session_ended');
          break;
        case 'PASSWORD_RECOVERY':
          track('auth:recovery_started');
          break;
        case 'USER_UPDATED':
          track('auth:user_updated');
          break;
      }
    });

    fetchSession();
    return () => {
      authListener?.subscription?.unsubscribe();
      if (sessionTimer) clearInterval(sessionTimer);
    };
  }, []);

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        login: trackedLogin, 
        logout: trackedLogout,
        validateSession,
        saveUserProgress
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};