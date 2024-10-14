document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    
    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;

  
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-btn');
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');

    // Append buttons to the task item
    newTask.appendChild(completeButton);
    newTask.appendChild(deleteButton);

  
    taskList.appendChild(newTask);

   
    taskInput.value = '';

  
    completeButton.addEventListener('click', function() {
        newTask.classList.toggle('completed');
    });

    // Add event listener to delete the task
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(newTask);
    });
});
