import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://icanhazdadjoke.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        headers: {
          // Optionally, you can set custom headers if needed
          // "User-Agent": "Your Custom User Agent",
        },
      },
    },
  },

  plugins: [react()],
});
