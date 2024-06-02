// Variables
const input = document.getElementById("input");
const inputBtn = document.getElementById("inputBtn");
const taskList = document.getElementById("taskList");
const filterTodo = document.querySelector(".filter-todo");
const select = document.querySelector(".select");
let task = undefined;
let removeButton;
let taskEl;

// mainFunctions
inputBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value) {
    cleaningUp();
    createAllElements();
    input.value = "";
  } else {
    error();
  }
});

taskList.addEventListener("click", buttonsFuncs);
function buttonsFuncs(e) {
  const item = e.target;

  //For remove-button

  if (item.classList[0] === "remove-btn") {
    const todoItem = item.parentElement;

    todoItem.classList.add("slide");

    todoItem.addEventListener("transitionend", () => {
      todoItem.remove();
    });
  }
  //For completed-button
  if (item.classList[0] === "completed-btn") {
    const todoItem = item.parentElement;
    const allEls = todoItem.childNodes;
    allEls[0].classList.add("completed");
    item.remove();
  }
}

// DOM creating function
function createAllElements() {
  taskEl = document.createElement("li");
  task = document.createElement("p");
  removeButton = document.createElement("button");
  completedButton = document.createElement("button");
  completedButton.setAttribute("class", "completed-btn");
  completedButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
  task.setAttribute("class", "task__text");
  taskEl.setAttribute("class", "task__item");
  removeButton.classList.add("remove-btn");
  task.innerHTML = input.value;
  removeButton.innerHTML = `<i class="fa-solid fa-minus"></i>`;
  taskEl.append(task);
  taskEl.append(removeButton);
  taskEl.append(completedButton);
  taskList.append(taskEl);
}

//checkerFunctions
function error() {
  input.classList.remove("input__bg");
  input.classList.add("input__error");
  input.setAttribute("placeholder", "Please type in");
}
function cleaningUp() {
  input.classList.remove("input__error");
  input.classList.add("input__bg");
  input.removeAttribute("placeholder");
}

// Filter function
filterTodo.addEventListener('change',filterTodoF);

function filterTodoF(e){
	const todos=taskList.childNodes;
	todos.forEach(todo =>{
		switch(e.target.value){
			case 'All':
				todo.style.display='flex';
				break;
			case 'Completed':
				if(todo.childNodes[0].classList.contains('completed')){
			todo.style.display='flex';
					
				}else{
			todo.style.display='none';
					
				}
				break;
				case 'Incompleted':
				if(!todo.childNodes[0].classList.contains('completed')){
			todo.style.display='flex';
					
				}else{
			todo.style.display='none';
					
				}
				break;
			
		}
	})
}



// TODO  Зробити так,щоб при оновленні не видалялося!!!