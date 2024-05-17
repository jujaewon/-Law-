import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from '@svgr/rollup';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  define: {
    'process.env': process.env,
  },
  plugins: [react(), tsconfigPaths(), svgr()],
});
