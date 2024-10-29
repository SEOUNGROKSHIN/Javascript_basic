// const loginForm = document.querySelector("#login-form")
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

// JS는 이벤트에 대한 정보를 (event)인자에 담음 그래서 event를 호출하게되면 submit에 대한 정보를 가져올 수 있음.
function onLoginBtnClick(event) {
   event.preventDefault();
   console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginBtnClick);

