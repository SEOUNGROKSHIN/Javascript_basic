const title = document.querySelector("div.hello:first-child h1");

// object요소들을 반환
console.dir(title);

// EventListener
// 1. selector를 찾는다
const elEvent = document.querySelector("div.eventListener");

// 2. event동작 등록 // 이벤트가 발생하면 로직 수행
function handleTitleClick() {
    alert("eventEl was clicked!");
    title.style.color = "orangered";
}

// 2. addEventListener 적용
elEvent.addEventListener("click", handleTitleClick);
