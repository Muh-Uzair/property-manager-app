import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import { fileURLToPath } from "url";
import path from "path";
import { defineConfig } from "vite";

// Get the directory name for ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    historyApiFallback: true,
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
