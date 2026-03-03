import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import Components from "unplugin-vue-components/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    Components({
      dirs: ["src/components"],
      dts: "src/components.d.ts",
    }),
  ],
  server: {
    port: 9090,
    strictPort: true,
  },
});
