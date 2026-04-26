import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/js/public/App.jsx',
        'resources/js/admin/App.jsx',
      ],
      refresh: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './resources/js'),
      '@public':     path.resolve(__dirname, './resources/js/public'),
      '@admin':      path.resolve(__dirname, './resources/js/admin'),
      '@hooks':      path.resolve(__dirname, './resources/js/hooks'),
      '@api':        path.resolve(__dirname, './resources/js/api'),
      '@components': path.resolve(__dirname, './resources/js/components'),
    },
  },
});