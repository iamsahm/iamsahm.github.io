import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Determine the base URL for GitHub Pages based on your repository name
const base = "/your-repository-name/"; // Replace with your repository name

// https://vitejs.dev/config/
export default defineConfig({
    base, // Set the base URL
    plugins: [vue()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    build: {
        outDir: "docs", // Output directory for GitHub Pages
    },
});
