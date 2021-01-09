
const form = document.getElementById("form");
const button = document.getElementById("button");
const todo = document.getElementById("todo");

let todoList = []; 

form.addEventListener("sumbit", function (event) {
    event.preventDefault();
    addTodo();
}); 

