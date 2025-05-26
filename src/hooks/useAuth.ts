// src/hooks/useAuth.ts

import { supabase } from "../lib/supabaseClient";

declare global {
  interface Window {
    signUp: (email: string, password: string) => Promise<{ user: any; error: any }>;
    signIn: (email: string, password: string) => Promise<{ user: any; error: any }>;
    getSession: () => Promise<{ session: any; error: any }>; // ✅ Add this
    refreshSession: () => Promise<{ session: any; error: any }>; // ✅ Add this
  }
}

window.signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (data?.session) {
    localStorage.setItem('supabase.auth.token', JSON.stringify(data.session));
  }
  console.log("SignIn:", { user: data?.user, error });
  return { user: data?.user, error };
};

window.signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  console.log("SignIn:", { user: data?.user, error });
  return { user: data?.user, error };
};

window.getSession = async () => {
  const { data: session, error } = await supabase.auth.getSession();
  console.log("Session:", session, error);
  return { session, error };
};

window.refreshSession = async () => {
  const { data: session, error } = await supabase.auth.refreshSession();
  console.log("Refreshed Session:", session, error);
  return { session, error };
};
