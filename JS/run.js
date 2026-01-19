function editTask(id){
    const tasks = JSON.parse(localStorage.getItem("tasks"));

    for (let task of tasks){
        task.isEditing = task.id === id;
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks(tasks);
}

function saveTask(id){
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const editInput = document.getElementById(`edit-${id}`);

    for (let task of tasks){
        if (task.id === id && editInput.value.trim()) {
            task.title = editInput.value.trim();
            task.isEditing = false;
        }
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks(tasks);
}

function cancelEdit(id){
    const tasks = JSON.parse(localStorage.getItem("tasks"));

    for (let task of tasks){
        if (task.id === id) {
            task.isEditing = false;
        }
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks(tasks);
}

     if (task.isEditing){
            li.innerHTML = `
                <input type="text" id="edit-${task.id}" value="${task.title}">
                <button onclick="saveTask(${task.id})">Save</button>
                <button onclick="cancelEdit(${task.id})">Cancel</button>
            `;
        } else {
            li.innerHTML = `
                <input type="checkbox"
                    ${task.completed ? "checked" : ""}
                    onchange="toggleTask(${task.id})">

                ${task.title}

                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            `;
        }
        list.appendChild(li);