/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import * as path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["src/setupTest.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
});
