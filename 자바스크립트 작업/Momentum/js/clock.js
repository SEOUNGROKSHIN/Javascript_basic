const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = (`${hour}:${minute}:${seconds}`);
}


// setInterval(function, 5000)
// 2개의 인자를 받음 ,
// 1. function
// 2. 초 설정

// setTimeout(function,5000)
// 2개의 인자를 받음
// 1. function
// 2. 기다리는 시간 뒤에 동작

getClock();
setInterval(getClock, 1000);