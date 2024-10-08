// 기본 문법
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