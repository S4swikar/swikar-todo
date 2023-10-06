// Get DOM elements
const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');

// Add task to the list
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span>${taskText}</span>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';

        // Update task count
        taskCount.textContent = `Total tasks: ${document.querySelectorAll('li').length}`;

        // Attach event listener to delete button
        const deleteButton = listItem.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            listItem.remove();
            updateTaskCount();
        });

        // Attach event listener to checkbox
        const checkbox = listItem.querySelector('.checkbox');
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                listItem.classList.add('completed');
            } else {
                listItem.classList.remove('completed');
            }
        });
    }
});

// Function to update task count
function updateTaskCount() {
    taskCount.textContent = `Total tasks: ${document.querySelectorAll('li').length}`;
}
