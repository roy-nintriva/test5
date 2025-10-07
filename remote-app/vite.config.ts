import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button.tsx',
      },
      shared: ['react','react-dom']
    }),
  ],
  server: {
    port: 5175,
    strictPort: true,
  },
  build: {
    target: 'esnext',
  },
  // preview: {
  //   port: 4174,
  //   strictPort: true,
  //   host: true,
  // },
})
