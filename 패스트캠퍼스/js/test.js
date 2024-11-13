const boxEl = document.querySelector(".box");
boxEl.classList.add("active");

let isContain = boxEl.classList.contains("active");

if (isContain) {
    console.log("포함됨!")
} else {
    alert("다시해라")
}
