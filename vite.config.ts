import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    visualizer(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // build: {
  //   chunkSizeWarningLimit: 1000, // 加大限制的大小将,500kb改成1000kb或者更大
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         // 分解块，将大块分解成更小的块
  //         if (id.includes("node_modules")) {
  //           return id
  //             .toString()
  //             .split("node_modules/")[1]
  //             .split("/")[0]
  //             .toString();
  //         }
  //       },
  //     },
  //   },
  // },
});
