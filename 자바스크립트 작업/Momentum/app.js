const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

// JS는 이벤트에 대한 정보를 (event)인자에 담음 그래서 event를 호출하게되면 submit에 대한 정보를 가져올 수 있음.
function onLoginBtnClick(event) {
   event.preventDefault();
   const username = loginInput.value;
   loginForm.classList.add(HIDDEN_CLASSNAME);
   console.log(username);
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginBtnClick);

