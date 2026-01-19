
// Write a function ParallelLimit(tasks, limit) where tasks is an array of functions that return Promises. Run only limit promises concurrently until all are resolved.
// Example:
// const tasks = [
//  () => fetch('/api/1'),
//  () => fetch('/api/2'),
//  () => fetch('/api/3')
// ];
// await ParallelLimit(tasks, 2);


// 1. Write a function MonitorLongRunningTasks(tasks, threshold, onSlowTask) that monitors async tasks and invokes onSlowTask(taskIndex, elapsedTime) for any task taking longer than threshold ms.

// 2. Write a function SeatingArrangementsWithRoundTable(people) that returns all unique circular permutations of people.
// Example:
// ("A,B,C" is the same as "B,C,A").

// 3. Write a function TimeoutWrapper(fn, ms) that wraps any async function fn and rejects if it takes longer than ms.



const list = document.getElementById("ulTask");
const input = document.getElementById("taskInput");

function initialLoad(){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    displayTasks(tasks);
}

function displayTasks(tasks){
    list.innerHTML = "";
    tasks.forEach((task)=>{
    const li = document.createElement("li");
    if(task.isEditing){
        li.innerHTML = 
        `
        <input type="text" id="edit-${task.id}" value="${task.title}">
        <button onclick="saveTask(${task.id})">Save</button>
        <button onclick="cancelEdit(${task.id})">Cancel</button>
        `;
    }
    else{
        li.innerHTML = 
        `
        <input type="checkbox" ${task.completed ? "checked" : ""}
        onchange="toggleTask(${task.id})">
        <span>${task.title}</span>
        <button onclick="editTask(${task.id})">Edit</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
        `;
    }
    list.appendChild(li);
    })
}
function taskAdd(){
    const title = input.value.trim();
    if(!title) return
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({
        id: Date.now(),
        title: title,
        completed: false,
        isEditing: false
    })
    localStorage.setItem("tasks", JSON.stringify(tasks));
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
    const newInput = document.getElementById(`edit-${id}`);
    if(!newInput) return 
    const newValue = newInput.value.trim();
    if(!newValue) return
    for(let i =0;i<tasks.length;i++){
        if(tasks[i].id === id){
            tasks[i].title = newValue;
            tasks[i].isEditing = false;
            break;
        }
    }
    localStorage.setItem("tasks",JSON.stringify(tasks));
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
    localStorage.setItem("tasks",JSON.stringify(tasks));
    displayTasks(tasks);
}

function deleteTask(id){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let remains = [];
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].id !== id){
            remains.push(tasks[i]);
        }
    }
    localStorage.setItem("tasks",JSON.stringify(remains));
    displayTasks(remains);
}
initialLoad()
