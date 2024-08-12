import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    }
  }),
  vite: {
    ssr: {
      external: ["crypto", "stream", "util", "buffer"]
    }
  }
});
