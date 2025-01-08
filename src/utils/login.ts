import wbtl from "jsonwebtoken";
import { dbLogin } from "./routes";

type LoginResponse =
  | { success: false; token: null; max: null }
  | { success: true; token: string; max: number };

export default async function login({
  email,
  password,
  maxAge,
  secret,
}: {
  email: string;
  password: string;
  maxAge: number;
  secret: string;
}): Promise<LoginResponse> {
  const getLoginData = await dbLogin(email, password);
  if (getLoginData.success === false) {
    return { success: false, token: null, max: null };
  }
  const expire = Math.floor(Date.now() / 1000) + maxAge;
  const token = wbtl.sign(
    {
      exp: expire,
      email: email,
      username: getLoginData.username,
    },
    secret,
  );
  return { success: true, token: `${token}`, max: maxAge };
}
