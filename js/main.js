// Get the container id in a variable so you can use it later to add the elements
var listContainer = document.getElementById('contenedorLista');

// Creation of base elements according to the html structure
let appTitle = document.createElement('h1');
let form = document.createElement('form');
let textInput = document.createElement('input');
let addTaskButton = document.createElement('button');
addTaskButton.innerHTML = '<i class="fas fa-plus-square"></i>';
let taskContainer = document.createElement('section');
let taskListDiv =  document.createElement('div');
let list = document.createElement('ol');

// add properties of each of the elements created
appTitle.className = 'title';
textInput.type = 'text';
textInput.id = 'text';
textInput.className = 'todo_input';
addTaskButton.type ='submit'
addTaskButton.className = 'todo_button'
taskContainer.className = 'containerTask';
taskListDiv.className = 'todo_list'
list.id = 'list';



// Adding elements to structure 
listContainer.appendChild(appTitle);
appTitle.appendChild(document.createTextNode('To Do App'));
listContainer.appendChild(form);
form.appendChild(textInput);
form.appendChild(addTaskButton);
listContainer.appendChild(taskContainer);
taskContainer.appendChild(taskListDiv);
taskListDiv.appendChild(list);

