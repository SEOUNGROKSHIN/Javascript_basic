const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");
let toDos = [];
const TODOS_KEY = "todos"

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentNode;
    li.remove();
    toDos = todos.filter(todo => todo.id !== parseInt(li.id));
    saveTodos();
}


function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDoInput.value = "";
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    // 속성 부여
    li.id = newTodo.id;

    span.innerHTML = newTodo.text;
    button.innerHTML = "❌"

    // li 태그안에 span 태그를 넣어줌
    li.appendChild(span);
    li.appendChild(button);

    // id : todo-List 요소에 <li><span><span></li> 저장
    toDoList.appendChild(li);
    // button에 이벤트 추가
    button.addEventListener("click", deleteTodo);
}


toDoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (saveTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);

    // arrow function
    // parsedTodos.forEach((item, idx) => console.log(`hello Item ${idx} : ${item}`));

    parsedTodos.forEach(paintTodo);
    todos = parsedTodos;    // localStorage에 있는 데이터를 가져옴
}

// [1, 2, 3, 4, 5, 6, 7, 8, 9].filter() =>
// 1. filter Function 필요 //
// 2. 무조건 true를 반환해야 함.
// 3이상의 숫자는 제거
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// 일반적인 방법
function sexyFilter(num) {return num <= 3}  // 남겨둘 숫자들의 조건
let numbers = arr.filter(sexyFilter);
// 화살표 함수
const filterArr = arr.filter(item => item <=3 );

console.log(filterArr);
console.log(numbers);

function sayHello(item,idx) {
    console.log("hello item" + idx + ":" + item);
    // parsedTodos.forEach(sayHello);
}
