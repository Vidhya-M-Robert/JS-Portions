// Fetch 5 users from https://randomuser.me/api/?results=5
// Show their:
// Picture
// Name
// Email
// Add a “Shuffle Users” button that re-fetches 5 new ones.
// Add a text input → filter users by name in real-time (client-side filtering).

const userlist = document.getElementById("ulList");
const input = document.getElementById("searchInput")
let users = [];
async function fetchUsers(){
    try{
        const response = await fetch("https://randomuser.me/api/?results=5");
        if(!response.ok){
            throw new Error("API Failed");
        }
        const resp = await response.json();
        users = resp.results;
        displayUsers(users);
    }
    catch(err){
        console.log(err.message)
    }
}
function displayUsers(users){
   userlist.innerHTML = "";
  users.forEach((user)=>{
    const div = document.createElement("div");
    div.className = "userClass";

    div.innerHTML = `
    <img src="${user.picture.medium}">
    <div>
        <strong>${user.name.first} ${user.name.last}</strong>
        <small>${user.email}</small>
    </div>
    `;
    userlist.appendChild(div);
  });
}

searchInput.addEventListener("input", ()=>{    // "input" => fires when user types,deletes,pates,clears text
   const vlue = input.value.toLowerCase();

   const filteredUsers = users.filter(user =>
    `${user.name.first} ${user.name.last}`
    .toLowerCase()
    .includes(vlue)
   );

displayUsers(filteredUsers)
});

fetchUsers();