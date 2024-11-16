const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input")

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    /* Html 속성 추가
    1. 속성의 이름
    2. 설정 값
    * */
    searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
})