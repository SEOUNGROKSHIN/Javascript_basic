const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    console.log(newTodo, toDoInput.value);
    paintTodo(newTodo);
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    // li 태그안에 span 태그를 넣어줌
    li.appendChild(span);
    span.innerHTML = newTodo;
    // id : todo-List 요소에 <li><span><span></li> 저장
    toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", handleTodoSubmit);
