function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" class="task-checkbox" onclick="toggleTaskCompletion(this)">
            <span class="task-name">${taskInput.value}</span>
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

function toggleTaskCompletion(checkbox) {
    const taskName = checkbox.nextElementSibling;
    taskName.classList.toggle('completed');
}

function editTask(taskNameElement) {
    const previousTaskName = taskNameElement.textContent;
    const newTaskName = prompt('Edit task:', previousTaskName);
    if (newTaskName !== null && newTaskName.trim() !== '') {
        taskNameElement.textContent = newTaskName;
    }
}
