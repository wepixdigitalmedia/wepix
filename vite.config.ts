import fs from "fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

/** Copy index.html → 404.html so GitHub Pages serves the SPA for direct URLs. */
function spaFallbackPlugin() {
  return {
    name: "spa-fallback",
    closeBundle() {
      const index = path.resolve(__dirname, "dist/index.html");
      if (fs.existsSync(index)) {
        fs.copyFileSync(index, path.resolve(__dirname, "dist/404.html"));
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode !== "development" && spaFallbackPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },
}));
