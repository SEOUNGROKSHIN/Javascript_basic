/**
 * 이벤트 처리방법
 * 1. Element를 찾기
 * 2. event를 Listen하기
 * 3. event에 반응하기
 * (무언가 보여주거나 감추거나 , 색깔을 바꾼다 등등
 * */


const title = document.querySelector(".hello h1");

// object요소들을 반환
// console.dir(title);

// const elEvent = document.querySelector("div.eventListener");


/* 2. event동작 등록 // 이벤트가 발생하면 로직 수행
 function handleTitleClickNoIf() {
     title.style.color = "blue";
 } */


// 2. addEventListener 적용
// elEvent.addEventListener("click", handleTitleClick);

function handleTitleClick() {
    if(title.className === "active") {
        title.className = "";
    } else {
        title.className = "active";
    }
}

title.addEventListener("click", handleTitleClick);