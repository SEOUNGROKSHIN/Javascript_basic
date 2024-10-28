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
    const clickedClass = "clicked";

    // 버전 1
    // if(title.classList.contains(clickedClass)) {
    //     title.classList.remove(clickedClass);
    // } else {
    //     title.classList.add(clickedClass);
    // }

    // toggle 적용
    // toggle은 title의 classList에 clicked class가 있는지 확인 후 있으면 제거 or 존재하지 않으면 추가
    title.classList.toggle(clickedClass);
}

title.addEventListener("click", handleTitleClick);