import type { APIRoute } from "astro";

const cookieName = import.meta.env.COOKIE_NAME || "_Security_Login_";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  const cook: string = `${cookies.get(cookieName)?.value}`;
  cookies.set(cookieName, cook, {
    path: "/",
    maxAge: 0,
    secure: Boolean(import.meta.env.COOKIE_SECURE || false),
  });
  return redirect("/");
};
