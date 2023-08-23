import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.tsx', '.ts', '.js']
  },
  css: {
    postcss: {
      plugins: [autoprefixer as any]
    }
  },
})
