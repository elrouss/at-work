import { defineConfig } from 'vite';
import createSvgSpritePlugin from 'vite-plugin-svg-spriter';
import * as path from 'path';
import react from '@vitejs/plugin-react';

const SRC_PATH = path.resolve(__dirname, 'src');
const SVG_FOLDER_PATH = path.resolve(SRC_PATH, 'assets', 'icons');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), createSvgSpritePlugin({ svgFolder: SVG_FOLDER_PATH,  })],
  base: '/at-work/',
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, SRC_PATH) }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/_index.scss" as *;`,
      },
    },
  },
});
