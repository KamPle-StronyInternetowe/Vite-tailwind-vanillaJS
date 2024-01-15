import path from "node:path";
import { defineConfig } from "vite";

const cwd = process.cwd();

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(cwd, "index.html"),
        polityka_prywatnosci: path.resolve(cwd, "polityka_prywatnosci.html"),
      },
    },
    emptyOutDir: true
  },
});
