import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    name: `saeris.gg`,
    globals: true,
    environment: `jsdom`,
    setupFiles: `./vitest.setup.ts`,
    watch: false
  }
});
