import { error } from "console";
import fs from "fs";

// Function to read existing users from users.json file
try {
  const existingUsers = fs.readFileSync("users.json", "utf8");
  const parsedUsers = JSON.parse(existingUsers);
  console.log(parsedUsers);
} catch (error) {
  console.log("Error reading file", error);
}

const getUserById = (userId) => {
  const existingUsers = fs.readFileSync("users.json", "utf8");
  const parsedUsers = JSON.parse(existingUsers);
  const foundUser = parsedUsers.find((user) => user.id === userId);
  //   if (!foundUser) {
  //     return {};
  //   }
  //   return foundUser;

  //   return foundUser ? foundUser : {}; // ternary operator
  return foundUser ?? {}; // nullish coalescing operator
};

const foundUser = getUserById(100);
console.log(foundUser);

//Add User
export const addUser = (user) => {
  const existingUsers = fs.readFileSync("users.json", "utf8");
  const parsedUsers = JSON.parse(existingUsers);
  const newUserId = parsedUsers.length + 1;
  const newUser = {
    id: newUserId,
    name: user.name,
    username: user.username,
    email: user.email,
  };
  parsedUsers.push(newUser);
  fs.writeFileSync("users.json", JSON.stringify(parsedUsers), null, 2);
  fs.appendFileSync(
    "logs.txt",
    `\n [${new Date().toISOString()}] Action performed: User added with id ${newUserId}`
  );
};

//Edit User
export const editUser = (num, user) => {
  const existingUsers = fs.readFileSync("users.json", "utf-8");
  const parsedUsers = JSON.parse(existingUsers);

  const userIndex = parsedUsers.findIndex((user) => user.id === num);

  if (userIndex !== -1) {
    parsedUsers[userIndex] = {
      id: num,
      name: user.name,
      username: user.username,
      password: user.password,
    };

    console.log(`User with id ${num} is edited`);
  } else {
    console.log("User not found");
  }

  fs.writeFileSync("users.json", JSON.stringify(parsedUsers), null, 2);
  fs.appendFileSync(
    "logs.txt",
    `\n [${new Date().toISOString()}] Action performed: User with id ${num} edited`
  );
};

//Delete User
export const deleteUser = (num) => {
  const existingUsers = fs.readFileSync("users.json", "utf-8");
  const parsedUsers = JSON.parse(existingUsers);

  const userIndex = parsedUsers.findIndex((user) => user.id === num);

  if (userIndex !== -1) {
    parsedUsers.splice(userIndex, 1);
    console.log(`User with id ${num} is deleted from the list!`);
  } else {
    console.log("User not found");
  }

  fs.writeFileSync("users.json", JSON.stringify(parsedUsers), null, 2);
  fs.appendFileSync(
    "logs.txt",
    `\n [${new Date().toISOString()}] Action performed: User with id ${num} deleted`
  );
};

//Delete All Users
export const deleteAllUsers = () => {
  fs.writeFileSync("users.json", JSON.stringify([]), null, 2);
  fs.appendFileSync(
    "logs.txt",
    `\n [${new Date().toISOString()}] Action performed: Deleted all users`
  );
};
