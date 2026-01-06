// Async / Await are synctatic sugar over promises

const promise = new Promise((res,rej) =>{
    res(["JavaScript","Python"])
})
// promise.then((response)=>{
//     console.log(response)
// }).catch((error) => {
//     console.log(error);
// });


// Make it a function, as async/ await only work for a function


async function getdata(){           //normal function
   const response = await promise;
   console.log(response);
}
getdata();

// Arrow Function
const getData = async() => {
    const response = await promise;
    console.log(response);
}
getData();

// if the promise get rejects => 
    
const promise2 = new Promise((res,rej)=>{
    rej("API failed");
})

const getdata = async() => {
    const response = await promise2.catch((error) =>{
        console.log(error);
    });
    if(response){
        console.log(response);   //if we didn't check if there is any response, then it may return undefined also for error case.
    }
}

// try catch
const fetchData = async() => {
    try{
        const response = await promise2;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
};
fetchData();

// IIFE
(async() => {
    const response = await promise;
    console.log(response);
})();

(async function(){
    const response = await promise;
    console.log(response);
})()


// Tip

const fetchApi = ()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}
fetchApi();
// Converting the above to async await


const fetchA = async()=>{
    const response = fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}
fetchA();


const fetchB = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
       const data = await response.json()  // as it is also a promise it should also await
       console.log(data);
}
fetchB();

// try catch

const fetchtrycatch = async() =>{
    try{
        const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json();
    console.log(data)
    }
    catch(error){
        console.log(error);
    }
} 
fetchtrycatch();

// suppose 2 or 3 like this

const fetchtrycatchrep = async() =>{
    try{
        const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json();
    console.log(data)
    }
    catch(error){
        console.log(error);
    }
} 
fetchtrycatchrep();

const fetchcatch = async() =>{
    try{
        const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json();
    console.log(data)
    }
    catch(error){
        console.log(error);
    }
} 
fetchcatch();

const fetchtry = async() =>{
    try{
        const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json();
    console.log(data)
    }
    catch(error){
        console.log(error);
    }
} 
fetchtry();
//  To make this generic 


const genericFunction = async(url) =>{
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch(error){
        return error;
    }
};

const fetchh = async() =>{
    try{
        const response =  await genericFunction('https://jsonplaceholder.typicode.com/todos/1,"POST"')
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}; 
fetchh();









// const genericFunction = async(url,method, data) =>{
//     try{
//         const response = await fetch(url, {
//             method: method,
//             body: data,
//         });
//         const data = await response.json();
//         return data;
//     }
//     catch(error){
//         return error;
//     }
// };

// const fetchh = async() =>{
//     try{
//         const response =  await genericFunction('https://jsonplaceholder.typicode.com/todos/1,"POST"')
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }; 
// fetchh();
// to make try catch generic