import wblt from "jsonwebtoken";
import type {profileType} from "./types";

export default function hasProfile(myToken: string) {
  let email: string | null = null;
  let username: string | null = null;
  let success: boolean = true;
  switch (myToken) {
    case "undefined":
      success = false;
      return {success: success, email: email, username: username};
    case undefined:
      success = false;
      return {success: success, email: email, username: username};
    case "null":
      success = false;
      return {success: success, email: email, username: username};
    case null:
      success = false;
      return {success: success, email: email, username: username};
    default:
      const data = wblt.verify(myToken, "secret") as profileType;
      if (data.email && data.username) {
        email = data.email;
        username = data.username;
      } else {
        success = false;
      }
      return {success: success, email: email, username: username};
  }
}
