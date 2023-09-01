import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // add @ src alias
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [react()],
});
