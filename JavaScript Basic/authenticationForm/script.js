let logInBtn = document.getElementById("logInBtn");
let registerBtn = document.getElementById("registerBtn");

let logInForm = document.getElementById("logInForm");
let registerForm = document.getElementById("registerForm");

let usernameError = document.getElementById("usernameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let ageError = document.getElementById("ageError");

let submitBtn = document.getElementById("submitBtn");
let submitBtnLogIn = document.getElementById("submitBtnLogIn");

let memoryOfUsers = [];

// Show log in form and hide register form
logInBtn.addEventListener("click", function () {
  logInForm.style.display = "block";
  registerForm.style.display = "none";
});

// Show register form and hide log in form
registerBtn.addEventListener("click", function () {
  logInForm.style.display = "none";
  registerForm.style.display = "block";
});

// Registration function
function registration() {
  let username = document.getElementById("usernameRegister").value;
  let email = document.getElementById("emailRegister").value;
  let password = document.getElementById("password").value;
  let age = document.getElementById("age").value;

  let isValid = true;

  //Validate username
  if (username.length > 25 || username.length === 0) {
    usernameError.innerText = "Username must be between 1 and 25 characters!";
    isValid = false;
    return;
  } else {
    usernameError.innerText = "";
    isValid = true;
  }

  //Validate email
  if (email.length === 0) {
    emailError.innerText = "Email must not be empty!";
    isValid = false;
    return;
  } else {
    emailError.innerText = "";
    isValid = true;
  }

  //Validate password
  if (password.length < 8) {
    passwordError.innerText = "Password must have at least 8 characters!";
    isValid = false;
    return;
  } else {
    usernameError.innerText = "";
    isValid = true;
  }

  //Validate age
  if (isNaN(age) || age < 18) {
    ageError.innerText = "You must have at least 18 years!";
    isValid = false;
    return;
  } else {
    usernameError.innerText = "";
    isValid = true;
  }

  if (isValid) {
    memoryOfUsers.push({ username, email, password, age });
    logInForm.style.display = "block";
    registerForm.style.display = "none";
  }
}

// LogIn function
function logIn() {
  let usernameLogIn = document.getElementById("usernameLogIn").value;
  let passwordLogIn = document.getElementById("passwordLogIn").value;
  let message = document.getElementById("message");

  let userFound = false;

  for (let user of memoryOfUsers) {
    if (user.username === usernameLogIn && user.password === passwordLogIn) {
      userFound = true;
      message.innerText = "Login successful!";
      break;
    }
  }

  if (!userFound) {
    message.innerText = "Invalid username or password!";
  }
}

// Submit registration
submitBtn.addEventListener("click", registration);

// Submit logIn
submitBtnLogIn.addEventListener("click", logIn);
