import wbtl from "jsonwebtoken";
import {dbLogin} from "./routes";

export default async function login(email: string, password: string) {
  const getLoginData = (await dbLogin(email, password).then((data) => {
    return data;
  })) as any;
  if (getLoginData.success == false) {
    return {success: false, token: null, max: null};
  } else {
    const maxAge = 60 * 60 * 24 * 7;
    const expire = Math.floor(Date.now() / 1000) + maxAge;
    const token = wbtl.sign(
      {
        exp: expire,
        email: email,
        username: getLoginData.username,
      },
      "secret",
    );
    return {success: true, token: `${token}`, max: maxAge};
  }
}
