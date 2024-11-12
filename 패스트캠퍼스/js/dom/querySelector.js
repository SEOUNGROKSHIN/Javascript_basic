// HTML 요소(Element) 1개 검색 / 찾기
const boxEl = document.querySelector('.box');

console.log(boxEl);
// document.querySelector
boxEl.addEventListener("click", function() {
    console.log("Click!!");
    boxEl.classList.add('active');
    console.log(
        boxEl.classList.contains('active')
    );
    boxEl.classList.remove('active');
    console.log(
        boxEl.classList.contains('active')
    );
});

