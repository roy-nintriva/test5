import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host_app',
      remotes: {
        remote_app: {
          type: 'module',
          name: 'remote_app',
          entry: 'http://localhost:4174/remoteEntry.js',
        },
      },
shared: {
  react: { "singleton": true, "requiredVersion": "^19.1.0" },
  "react-dom": { "singleton": true, "requiredVersion": "^19.1.0" },
  
}

    }),
  ],
  server: {
    port: 5174,
    origin: 'http://localhost:5174',
    strictPort: true,
  },
  build: {
    target: 'esnext',
  },
})



