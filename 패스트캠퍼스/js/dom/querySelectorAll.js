const boxEls = document.querySelectorAll('.box');
const numEls = document.querySelectorAll(".num");

boxEls.forEach(function (boxEl, index) {
    boxEl.classList.add(`order-${index + 1}`)
    console.log(index, boxEl);
})

numEls.forEach((numEl) => {
    numEl.classList.add("hello");
})

