const taskInput = document.getElementById('taskInput');
const button = document.getElementById('button');
const taskList = document.getElementById('task-list');

button.addEventListener('click', function (e) {
    e.preventDefault();

    const taskText = taskInput.value;
    const newListItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';  
    checkBox.type = 'checkbox';
    
    if (taskText === "") {
        
    }
    newListItem.append(taskText);
    newListItem.append(checkBox);
    newListItem.append(removeButton);
    taskList.append(newListItem);  

    
    // const remButton = document.querySelector('button');
    removeButton.addEventListener('click', function (e) {
        e.preventDefault();
        taskList.removeChild(newListItem);
    })
});