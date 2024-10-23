import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy all requests to your backend server
      "/": {
        target: "https://frotify-backend.vercel.app", // Replace with your backend URL
        changeOrigin: true,
      },
    },
  },
});
