const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");
const toDos = [];
const TODOS_KEY = "todos"
function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    // console.log(event.target);
    const li = event.target.parentNode;
    li.remove();
}


function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    // 속성 부여
    li.id = "item";
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerHTML = newTodo;
    button.innerHTML = "❌"
    // li 태그안에 span 태그를 넣어줌
    li.appendChild(span);
    li.appendChild(button);
    // id : todo-List 요소에 <li><span><span></li> 저장
    toDoList.appendChild(li);
    // button에 이벤트 추가
    button.addEventListener("click", deleteTodo);
}

function sayHello(item,idx) {
    console.log("hello item" + idx + ":" + item);
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (saveTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    // parsedTodos.forEach(sayHello);
    // arrow function
    parsedTodos.forEach((item, idx) => console.log(`hello Item ${idx} : ${item}`));
}