// src/types/global.d.ts

declare global {
  interface Window {
    supabase: SupabaseClient;
  }
}

export {}; // Prevents TypeScript from treating this file as a module
