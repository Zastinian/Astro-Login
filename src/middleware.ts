import { COOKIE_NAME, COOKIE_SECRET } from "astro:env/server";
import { defineMiddleware } from "astro:middleware";
import hasProfile from "@/utils/profile";

export const onRequest = defineMiddleware(async (context, next) => {
  const cookie = context.cookies.get(COOKIE_NAME || "_Security_Login_")?.value;
  const d = hasProfile(cookie, COOKIE_SECRET || "secret");
  context.locals.profile = d;
  return next();
});
