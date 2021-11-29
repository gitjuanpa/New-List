const tareaInput = document.querySelector('.tareaInput');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
const filterOption = document.querySelector('.filter_todo');
//evento listeners
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)
filterOption.addEventListener("click", filterTodo)
//functions

function addTodo(event) {
    event.preventDefault();
    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //todo LI 
    const newTodo = document.createElement('li');
    newTodo.innerText = tareaInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if(tareaInput.value === ""){
        return null
    }
    //verificacion Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_btn')
    todoDiv.appendChild(completedButton);
    //eliminar Button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_btn')
    todoDiv.appendChild(deleteButton);
    //Agregar a LISTA
    todoList.appendChild(todoDiv);
    //borrar tarea input VALUE
    tareaInput.value = ""
}

//BORRAR Y VERIFICAR
function deleteCheck(e) {
    const item = e.target;
    //ELIMINAR ELEMENTO
    if (item.classList[0] === "delete_btn") {
        const todo = item.parentElement;
        //ANIMATION TRANSITION
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }
   
    if (item.classList[0] === "complete_btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completedItem")
    }
}
//FILTRAR LAS TAREAS SEGÚN LA OPCIÓN
function filterTodo(e) {
    const todos = todoList.childNodes;
    for(let i = 1; i<todos.length; i++ ){
        switch (e.target.value) {
            case "all":
                todos[i].style.display = "flex";
                break;
            case "completed":
                if (todos[i].classList.contains('completedItem')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todos[i].classList.contains('completedItem')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
        }
    }
} 