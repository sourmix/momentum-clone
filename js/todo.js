const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");
let toDos = [];
const TODOS_KEY = "todos";

//이벤트 키의 부모요소 li를 제거, LS안의 id값을 정수로 변환하여 대조해 불일치 값 제거
function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo)=> todo.id !== parseInt(li.id));
    saveToDos();
    //배열 형변환 LS 값
    const savedTodo = JSON.parse(localStorage.getItem(TODOS_KEY));
    //toDos 키에 저장된 값이 없을 경우, ul에 hidden class를 추가
    if(savedTodo?.length === 0) {
    toDoList.classList.add("hidden");
    }
}
//toDos 객체를 문자열로 변환해 LS에 저장
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "✔";
    button.addEventListener("click", deleteTodo);
    //li의 자식으로 해당요소를 가진다
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    //hidden을 ul의 class명에서 제거
    toDoList.classList.remove("hidden");
}

function handleToDoSubmit(event) {
    //input의 기본기능인 제출 후 페이지 새로고침을 막음
    event.preventDefault();
    const newTodo = toDoInput.value;
    //입력 기본값을 ""로 고정
    toDoInput.value = "";
    //입력값과 랜덤id 두 요소를 포함한 배열로 정의
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    //toDos 객체에 값 추가
    toDos.push(newTodoObj);
    saveToDos();
    //정의된 배열을 인자로 paintTodo 실행
    paintTodo(newTodoObj);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

toDoForm.addEventListener("submit", handleToDoSubmit);
//LS에 저장된 문자열이 있을 경우, 배열로 변환하고 toDos 객체에 업데이트
if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    //객체 하나 당 paintTodo를 각각 실행
    parsedToDos.forEach(paintTodo);
} 
