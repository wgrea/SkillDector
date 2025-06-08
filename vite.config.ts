// vite.config.ts

// npm run dev

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This exact mapping matches your tsconfig
      '@': path.resolve(__dirname, './src'),
      // Add explicit lib alias for absolute certainty
      '@lib': path.resolve(__dirname, './src/lib')
    }
  },
  optimizeDeps: {
    include: ['@supabase/supabase-js']
  }
});