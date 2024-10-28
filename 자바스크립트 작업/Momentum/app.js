// const loginForm = document.querySelector("#login-form")
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

loginButton.addEventListener("click", function () {
    console.dir(loginInput);
    console.log("clicked");
})