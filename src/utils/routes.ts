interface dbLoginType {
  success: boolean;
  username: string | null;
}

export function dbLogin(email: string, password: string): Promise<dbLoginType> {
  let username: string | null = null;
  let success = false;
  return new Promise((resolve) => {
    if (email === "user@example.com" && password === "1234") {
      username = "User Test";
      success = true;
    }
    resolve({ success, username });
  });
}
