import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {federation} from '@module-federation/vite'

export default defineConfig({
  base: 'http://localhost:4174/',
  plugins: [
    react(),
    federation({
      name: 'remote_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button.tsx',
      },
      shared: {
  react: { "singleton": true, "requiredVersion": "^19.1.0" },
  "react-dom": { "singleton": true, "requiredVersion": "^19.1.0" },
  
}
    }),
  ],
  server: {
    port: 5175,
    strictPort: true,
  },
  build: {
    target: 'esnext',
  },
  preview: {
    port: 4174,
    strictPort: true,
    host: true,
  },
})
