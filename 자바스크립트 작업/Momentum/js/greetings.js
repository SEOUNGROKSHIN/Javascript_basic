// const loginInput = document.querySelector("#login-form input");
// const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

// String형식의 반복되는 데이터는 상수처리를해서 대문자로 변수명을 지정하는 것이 좋음 JS에서는 에러를 잡아주지 않기 때문에
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY ="username";

// JS는 이벤트에 대한 정보를 (event)인자에 담음 그래서 event를 호출하게되면 submit에 대한 정보를 가져올 수 있음.
function onLoginBtnClick(event) {
   event.preventDefault();
   // loginForm.classList.add(HIDDEN_CLASSNAME);
   // const username = loginInput.value;
 
   // localstorage = 가상의 DB (뷰의 역할과 비슷함 & 휘발성 메모리)
   localStorage.setItem(USERNAME_KEY, username);
   paintGreetings(username);
}

function paintGreetings(username) {
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
   // show the form
   // loginForm.classList.remove(HIDDEN_CLASSNAME);
   // loginForm.addEventListener("submit", onLoginBtnClick);
} else {
   // show the greetings
   paintGreetings(savedUsername);
}