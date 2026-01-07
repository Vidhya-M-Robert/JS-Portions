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
        li.innerHTML = `<input type="checkbox" ${task.completed ? "checked":""}
        onchange="toggleTask(${task.id})">
        <span class="taskTitle">${task.title}</span>
        <button onclick= "deleteTask(${task.id})">Delete</button>`;
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
        completed: false
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