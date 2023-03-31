import wbtl from "jsonwebtoken";
import {dbLogin} from "./routes";

export default async function login(email: string, password: string) {
  const getLoginData = (await dbLogin(email, password).then((data) => {
    return data;
  })) as any;
  if (getLoginData.success == false) {
    return {success: false, token: null};
  } else {
    const token = wbtl.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        email: email,
        username: getLoginData.username,
      },
      "secret"
    );
    return {success: true, token: `${token}`};
  }
}
