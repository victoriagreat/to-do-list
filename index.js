function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            ${taskInput.value}
            <button class="remove-btn" onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}

function removeTask(task) {
    const taskItem = task.parentElement;
    taskItem.remove();
}
