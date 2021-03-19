let tasks = [];

// Create task by clicking the Add button
addTaskButton.addEventListener('click', function(event){
    
    event.preventDefault();
    
    if (textInput.value !== "") {

        let task = {
          id: new Date().getTime(),
          name: textInput.value,
        };
        tasks.push(task);
        addTask(task);
        textInput.value = "";
    }
    else{
        return null
    }
});

// Append task to html
function addTask(task){

    // Element of the list
    const listTask = document.createElement('li');
    listTask.className = 'todo-list';
    listTask.setAttribute('id',task.id);

    // Name Task
    listTask.innerHTML = `<span class = "check">${task.name}</span>`;

    // Complete button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.className = 'complete_btn';
    listTask.appendChild(completedButton);

     // Delete button
    const buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = '<i class="far fa-trash-alt"></i>';
    buttonDelete.className ='delete_btn';
    listTask.appendChild(buttonDelete);

    // Append to actual list
    list.appendChild(listTask);
}

//change the icon if the task has been marked as done.
function changeIcon(item) {
    if (item.children[0].classList[1] === 'fa-check') {
        item.children[0].classList.remove('fa-check');
        item.children[0].classList.add('fa-undo-alt');
        item.style = 'background-color: #0091ea;';
    } else {
        item.children[0].classList.remove('fa-undo-alt');
        item.children[0].classList.add('fa-check');
        item.style = 'background-color: #43a047;';
    }
}

//Delete the task by clicking the div in the list where the delete button is located
taskListDiv.addEventListener("click", deleteAndCheck);

taskListDiv.parentNode


// Analyze if delete or check task
function deleteAndCheck(event) {
    const item = event.target;
    
   if (item.className === "delete_btn" || item.parentNode.className === "delete_btn" ) {
        const taskId = item.closest("li").id;
        document.getElementById(taskId).remove();
   } else {
        if (item.className === "complete_btn") {
            item.previousSibling.classList.toggle("completedItem");
            changeIcon(item);
        } else {
            if (item.parentNode.className === "complete_btn") {
                item.parentNode.previousSibling.classList.toggle("completedItem");
                changeIcon(item.parentNode);
            }
        }
   }
}

