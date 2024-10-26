import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "serve" ? "/" : "/CineAhoraWebApp/",
  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "./src"),
      "@/constants": path.resolve(__dirname, "./src/constants"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/models": path.resolve(__dirname, "./src/models"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/routes": path.resolve(__dirname, "./src/routes"),
      "@/services": path.resolve(__dirname, "./src/services"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
    },
  },
}));
