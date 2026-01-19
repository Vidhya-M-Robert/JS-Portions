const input = document.getElementById("taskInput");
const list = document.getElementById("ulTask");
function initialLoad(){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    displayTasks(tasks);
}

function displayTasks(tasks){
    list.innerHTML = "";
    tasks.forEach((task) =>{
        const li = document.createElement("li");
        if(task.isEditing){
            li.innerHTML = `
            <input type="text" class="editInput" id="edit-${task.id}" value="${task.title}">
            <button onclick="saveTask(${task.id})">Save</button>
            <button onclick= "cancelEdit(${task.id})">Cancel</button>
            `;
        }
        else{
            li.innerHTML = `<input type="checkbox" ${task.completed ? "checked":""}
            onchange="toggleTask(${task.id})">
            <span class="taskTitle">${task.title}</span>
            <button onclick="editTask(${task.id})">Edit</button>
            <button onclick= "deleteTask(${task.id})">Delete</button>`;
        }
        list.appendChild(li);
    });
}

function taskAdd(){
    const title = input.value.trim();
    if(!title) return
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
     tasks.push({
        id: Date.now(),
        title : title,
        completed: false,
        isEditing: false
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
    displayTasks(tasks);
    input.value = "";
}

function toggleTask(id){
    const tasks = JSON.parse(localStorage.getItem("tasks"));
   for(let i=0;i<tasks.length;i++){
    if(tasks[i].id === id){
        tasks[i].completed = !tasks[i].completed;
        break;
    }
   }
   localStorage.setItem("tasks",JSON.stringify(tasks));
   displayTasks(tasks);
}

function editTask(id){
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    for(let i=0;i<tasks.length;i++){
        tasks[i].isEditing = tasks[i].id === id;
    }
    localStorage.setItem("tasks",JSON.stringify(tasks));
    displayTasks(tasks);
}

function saveTask(id){
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const editInput = document.getElementById(`edit-${id}`);
    if(!editInput) return;
    const newTitle = editInput.value.trim();
    if(!newTitle) return;
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].id === id){
            tasks[i].title = newTitle;
            tasks[i].isEditing = false;
            break;
        }
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks(tasks);
}

function cancelEdit(id){
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].id === id){
            tasks[i].isEditing = false;
            break;
        }
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks(tasks);
}


function deleteTask(id){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let remainTasks = [];
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].id !== id){
            remainTasks.push(tasks[i]);
        }
    }
    localStorage.setItem("tasks",JSON.stringify(remainTasks));
    displayTasks(remainTasks);
}
initialLoad()

