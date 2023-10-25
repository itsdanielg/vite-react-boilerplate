/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), tsConfigPaths()],
  server: {
    port: 3000,
    host: true
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTest.ts",
    css: true
  }
});
