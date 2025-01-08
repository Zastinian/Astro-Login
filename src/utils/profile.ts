import wblt from "jsonwebtoken";
import type { profileType } from "./types";

type HasProfileResponse =
  | { success: false; email: null; username: null }
  | { success: true; email: string; username: string };

export default function hasProfile(
  myToken: string | undefined,
  secret: string,
): HasProfileResponse {
  let email: string | null = null;
  let username: string | null = null;
  let success = false;
  if (!myToken || myToken === "undefined" || myToken === "null") {
    return { success, email, username };
  }
  try {
    const data = wblt.verify(myToken, secret) as profileType;
    if (data.email && data.username) {
      success = true;
      email = data.email;
      username = data.username;
    }
  } catch {
    success = false;
  }
  if (!success) {
    return { success, email: null, username: null };
  }
  return { success, email: email as string, username: username as string };
}
