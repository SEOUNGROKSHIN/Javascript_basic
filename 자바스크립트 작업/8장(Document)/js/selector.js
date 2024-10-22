// 기본 문법 (선택자)
// let selector_element = document.querySelector(selector);

// querySelector : Element를 css 방식으로 검색 1개의 결과만 리턴

// ID Selector('#name')
let elementID = document.querySelector('#id_selector');

// Class Selector('.name')
let elementClass = document.querySelector('.class_selector');

// Tag Selector('p')
let elementTag = document.querySelector('div');

// Composite Selector('div.#id_selector')
let elementComposite = document.querySelector('div#id_selector');

// .hello class 이름안에 h1 태그
let hellos = document.querySelector(".hello h1");
console.dir(hellos);

// Multi Selector(querySelectorAll)
// querySelectorAll : Element요소를 nodeList로 반환 배열의 결과를 리턴

// NodeList 사용 예시
const items = document.querySelectorAll('.item');

// 각 요소에 접근하기
items.forEach((item, index) => {
    console.log(`Item ${index}:`, item);
});
// 인덱스로 접근하기
// console.log(items[0]);  // 첫 번째 요소
// object 형식에 모든 속성들을 보여줌


// type이 text인 모든 input 요소
const inputs = document.querySelectorAll('input[type="text"]');


let multiSelector = document.querySelectorAll('div');
