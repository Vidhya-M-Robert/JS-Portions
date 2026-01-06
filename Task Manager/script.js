// GET

const API = "https://jsonplaceholder.typicode.com/todos?_limit=5";  // ? _limit=5 => queryParam  (URL ? key = value)  //Give only 5 items
const taskList = document.getElementById("taskList");
async function getTasks(){
    const response = await fetch(API);
    const tasks = await response.json();
    taskList.innerHTML = "";
    tasks.forEach(task => {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" ${task.completed ? "checked" : ""}>
      ${task.title}
      <button onclick="deleteTask(${task.id})">Delete</button>
    `;
        taskList.appendChild(li);
    });
}
getTasks();

// POST

async function addTask(){
    const input = document.getElementById("taskInput");
    const title = input.value.trim();
    if(!title) return ;
    const response = await fetch("https://jsonplaceholder.typicode.com/todos",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            title: title,
            completed: false
        })
    });
    const data = await response.json();
    console.log("Created:",data);
    input.value = "";
}

// PATCH

async function updateTask(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
        method : "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            completed: true
        })
    });
    const data = await response.json();
    console.log(data);
}
updateTask(2);

// PUT

async function EntireUpdate(id,title,completed){
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: id,
            title: title,
            completed: completed,
            userId: 1
        })
    });
    const data = await response.json();
    console.log(data); 
}
EntireUpdate(2,"Sample Task", true);

// DELETE

async function DeleteTask(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE"
    });
    console.log("Deleted",id)
}
DeleteTask(3);