import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    strictPort: true,
  },
  server: {
    strictPort: true,
    host: true, // Ensures the server binds to 0.0.0.0
    origin: "http://0.0.0.0:5173", // Keep the origin consistent with the default port
  },
});
