interface dbLoginType {
  success: boolean;
  username: string | null;
}

export function dbLogin(email: string, password: string): Promise<dbLoginType> {
  let username: string | null = null;
  let success = true;
  return new Promise((resolve, reject) => {
    if (email === "user@example.com" && password === "1234") {
      username = "User Test";
    } else {
      success = false;
    }
    resolve({ success, username });
  });
}
