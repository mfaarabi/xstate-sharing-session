const users = [
  {
    email: "abc@mail.com",
    password: "27t23G@a"
  }
];

export default ({ email, password }) =>
  new Promise((resolve, reject) => {
    resolve("login successful");
    // const foundUser = users.find(e => e.email === email);
    // if (foundUser) {
    //   if (foundUser.password === password) {
    //     return resolve({ email });
    //   } else {
    //     return reject(new Error("password is invalid"));
    //   }
    // } else {
    //   return reject(new Error("user not found"));
    // }
  });
