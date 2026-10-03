import path from 'node:path';
import { defineConfig } from 'vite';

const port = Number(process.env.PORT || 4173);

export default defineConfig({
  base: './',
  root: path.resolve(import.meta.dirname, '../../docs'),
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});