// src/hooks/useSessionRecovery.ts

import { useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient'; // Preferred

export function useSessionRecovery() {
  useEffect(() => {
    const recoverSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error('Session recovery failed:', error);
        return;
      }

      if (!session) {
        console.log('No existing session found');
        return;
      }

      // Validate session expiration
      const expiresAt = new Date(session.expires_at * 1000);
      if (expiresAt <= new Date()) {
        console.log('Session expired');
        await supabase.auth.signOut();
        return;
      }

      console.log('Recovered session for user:', session.user.email);
    };

    recoverSession();
  }, []);
}