import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const repoBase = "/sudhadentalcare/";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? repoBase : "/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    dedupe: ["react", "react-dom"],
  },
}));