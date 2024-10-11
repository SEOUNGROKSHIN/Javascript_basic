// 기본 문법 (선택자)
// let selector_element = document.querySelector(selector);

// ID Selector('#name')
let elementID = document.querySelector('#id_selector');

// Class Selector('.name')
let elementClass = document.querySelector('.class_selector');

// Tag Selector('p')
let elementTag = document.querySelector('div');

// Composite Selector('div.#id_selector')
let elementComposite = document.querySelector('div#id_selector');

// Multi Selector(querySelectorAll)
let multiSelector = document.querySelectorAll('div');

// DataType
let num = 5;
let str = "test"
let bool = false;
let obj = {
    name : "SHIN",
    age : 20,
    address : "Seoul"
};
let funcVar = function emptyFunc() {
    let test = "TESTDATA";
}

// Function
let normalAdd = function (a, b) {
    return a + b;
}

// Arrow
let arrowAdd = (a, b) => a + b;

console.log(normalAdd(1, 3));
console.log(arrowAdd(1, 2));

