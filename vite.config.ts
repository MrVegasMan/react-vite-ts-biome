import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./*", import.meta.url)),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      buffer: "buffer",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/styles/global/_colors.scss"; 
        @import "@/styles/global/_breakpoints.scss";
        @import "@/styles/global/_var.scss";
        `,
      },
    },
  },
});
