import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  envPrefix: "FORMKIT_",
  base: "/deno",
  build: {
    outDir: "dist/deno",
  },
});
