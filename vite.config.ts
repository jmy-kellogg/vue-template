import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import express from "./express-plugin";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ["components"].includes(tag),
        },
      },
    }),
    tailwindcss(),
    express("src/server"),
  ],
  server: {
    port: 3001,
  },
  define: {
    "process.env": process.env,
  },
});
