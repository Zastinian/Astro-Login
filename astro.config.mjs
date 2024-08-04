import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  server: {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 4321,
  }
});
