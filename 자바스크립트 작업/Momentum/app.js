// const loginForm = document.querySelector("#login-form")
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

loginButton.addEventListener("click", function () {
   const userName = loginInput.value;
   //  JS Validation
   // if (userName === "") {
   //     alert("Please write your name");
   // } else if (userName.length > 15) {
   //     alert("Your name is too long");
   // }

    console.log(userName);
});