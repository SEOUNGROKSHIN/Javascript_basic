const clock = document.querySelector("#clock");

function sayHello() {
    console.log("hello");
}

// 2개의 인자를 받음 ,
// 1. function
// 2. 초 설정
setInterval(sayHello, 5000)