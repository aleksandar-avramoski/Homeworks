import { greetUser } from "./greetingService.js";
import {
  addUser,
  editUser,
  deleteUser,
  deleteAllUsers,
} from "./userService.js";

let user = {
  firstName: "Jill",
  lastName: "Wayne",
};

let newUser = {
  name: "Bob",
  username: "Bobsky",
  email: "bob@email.com",
};

let editedUser = {
  name: "Aleks",
  username: "Alex",
  password: "testPassword1463",
};

addUser(newUser);
editUser(7, editedUser);
deleteUser(5);
//deleteAllUsers();

//greetUser(user.firstName);
