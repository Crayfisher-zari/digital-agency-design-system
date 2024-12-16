import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import "dotenv/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env?.BASE_PATH ?? "/",
  build: {
    lib: {
      entry: [resolve(__dirname, "src/index.ts")],
      name: "index",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    copyPublicDir: false,
  },
  resolve: {
    alias: {
      "@": `${__dirname}/src/`,
    },
  },
});
