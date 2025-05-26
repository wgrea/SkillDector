// src/lib/supabaseClient.ts

import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase environment variables!");
}

export const supabase: SupabaseClient = createClient(supabaseUrl!, supabaseKey!, {
  auth: {
    persistSession: true,
    storage: localStorage,  
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
window.supabase = supabase; // ✅ TypeScript should now understand this.