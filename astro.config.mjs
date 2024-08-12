import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: "server",
  adapter: vercel(),
  server: {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 4321,
  }
});
