import { defineConfig, loadEnv  } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [
      react(),
      federation({
        name: "host_app",
        remotes: {
          remote_app: env.VITE_REMOTE_URL,
        },
        shared: ["react", "react-dom"],
      }),
    ],
    server: {
      port: 5174,
      origin: "http://localhost:5174",
      strictPort: true,
    },
    build: {
      target: "esnext",
    },
  };
});
