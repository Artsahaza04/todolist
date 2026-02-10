function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Veuillez entrer une tâche.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskInput.value;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Terminé';
    completeButton.classList.add('complete');
    completeButton.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(li);
    });

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
})