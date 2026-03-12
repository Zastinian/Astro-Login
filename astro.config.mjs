// @ts-check
import vercel from "@astrojs/vercel";
import { defineConfig, envField } from "astro/config";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  security: { csp: true },
  server: {
    host: process.env.HOST || "localhost",
    port: Number(process.env.PORT) || 4321,
  },
  env: {
    schema: {
      MAX_AGE: envField.number({
        context: "server",
        access: "public",
      }),
      COOKIE_NAME: envField.string({
        context: "server",
        access: "public",
      }),
      COOKIE_SECRET: envField.string({
        context: "server",
        access: "secret",
      }),
      COOKIE_SECURE: envField.boolean({
        context: "server",
        access: "public",
      }),
    },
  },
});
