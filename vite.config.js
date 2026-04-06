import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative asset paths work for both project pages and user/org pages.
  base: './',
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    setupFiles: './src/test/setup.js',
    css: true,
    pool: 'threads',
  },
});
