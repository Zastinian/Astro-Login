import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  vite: {
    ssr: {
      external: ["crypto", "stream", "util", "buffer"]
    }
  }
});
