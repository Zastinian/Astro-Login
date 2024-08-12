import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "server",
  adapter: cloudflare({
    imageService: "passthrough",
  }),
  server: {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 4321,
  },
  vite: {
    ssr: {
      external: ["crypto", "stream", "util", "buffer"]
    }
  }
});
