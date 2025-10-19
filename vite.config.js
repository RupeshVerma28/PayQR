import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensure relative paths for assets
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: "./index.html",
    },
  },
});
