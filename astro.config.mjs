// @ts-check
import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: "server",
  adapter: vercel(),
  server: {
    host: process.env.HOST || "localhost",
    port: Number(process.env.PORT) || 4321,
  }
});
