import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { componentTagger } from "lovable-tagger";

const repoBase = "/sudhadentalcare/";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? repoBase : "/",
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    dedupe: ["react", "react-dom"],
  },
}));