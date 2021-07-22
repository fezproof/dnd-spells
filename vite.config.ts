import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dnd-spells/',
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        redirect: resolve(__dirname, '404.html'),
      },
    },
  },
});
