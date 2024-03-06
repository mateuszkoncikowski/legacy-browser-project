import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["chrome 42"],
      modernTargets: ["chrome 42"],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
