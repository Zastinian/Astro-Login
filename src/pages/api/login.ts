import type { APIRoute } from "astro";
import loginSave from "@/utils/login";

const cookieName = import.meta.env.COOKIE_NAME || "_Security_Login_";
let maxAge = 604800;

export const POST: APIRoute = async ({ cookies, redirect, request }) => {
  const data = Object.fromEntries(new URLSearchParams(await request.text()));
  const d = await loginSave({
    email: data.email,
    password: data.password,
    maxAge: Number(import.meta.env.MAX_AGE || 604800),
    secret: import.meta.env.COOKIE_SECRET || "secret",
  });
  let token = "none";
  if (d.success === true) {
    token = d?.token || "none";
    maxAge = d?.max || 604800;
    cookies.set(cookieName, token, {
      path: "/",
      maxAge: maxAge,
      secure: Boolean(import.meta.env.COOKIE_SECURE || false),
    });
    return redirect("/");
  }
  return redirect("/login?error=true");
};
