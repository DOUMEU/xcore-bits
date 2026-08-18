import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/xcore-bits/",
  plugins: [react()],

  // Lanyard의 card.glb처럼 .glb를 import하려면 Vite에 에셋으로 알려줘야 합니다.
  assetsInclude: ["**/*.glb"],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});