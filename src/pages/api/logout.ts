import { COOKIE_NAME, COOKIE_SECURE } from "astro:env/server";
import type { APIRoute } from "astro";

const cookieName = COOKIE_NAME || "_Security_Login_";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  const cook: string = `${cookies.get(cookieName)?.value}`;
  cookies.set(cookieName, cook, {
    path: "/",
    maxAge: 0,
    secure: Boolean(COOKIE_SECURE || false),
  });
  return redirect("/");
};
