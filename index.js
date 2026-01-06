// SYNCHRONOUS
console.log("Running 1");
for(let i =0;i<10;i++){
    console.log(i);
}
console.log("Running 2");
console.log("Running 3");   // as it is synchronous

// Making it asynchronous
console.log("Test 1");
setTimeout(()=>{            //asynchronous operation
    console.log("Test 2");
},5000)
console.log("Test 3");

// clg(T1) => stack
// clg(T3) => stack
// setTimeout => Web API(after timer) => queue(if stack empty) => stack(T2)

setTimeout(()=>{
    console.log("T2");   //Still asynchronous so (T1,T3, T2);
},0)
console.log("T1");
console.log("T3");
// asynchronous only works after the stack is get cleared

const button = document.getElementById(".btn");

button.addEventListener("click", ()=>{    //Also asynchronous so it will wait in the queue until it gets a click(event)
    console.log("Btn clicked");
});

// CALLBACK
// After the completion of a function it triggers another function.
console.log("start");
function getDataFromAPI(){
    return "Test Data";
}
console.log(getDataFromAPI());
console.log("End");

// 
console.log("start");
function getData(){
    setTimeout(() => {
        return "Data";
    },3000);
}
console.log(getData());
console.log("end")
// start 
// undefined   // As the function is called there is nothing to return , it is inside the setTimeout(), but it came to stack
// end
// Solution is callbacks

console.log("Start");
function dataGet(callback){
    setTimeout(() => {
        callback("Data passed");   // this function will run and the setTimeout will be in the queue and after that the callback function will be put into stack
    }, 3000);
}
dataGet((value) => {
    console.log(value);
})
console.log("end");

// callback hell

console.log("Start");
function firstData(callback){
    setTimeout(() =>{
        callback("D1");
    },1000)
}
function firstData(callback){
    setTimeout(() =>{
        callback("D2");
    },1000)
}
function firstData(callback){
    setTimeout(() =>{
        callback("D3");
    },1000)
}
firstData((value) => {
    console.log(value);
})


console.log("Start");
function firstData(callback){
    setTimeout(() =>{
        callback(5);
    },1000)
}
function firstData2(callback){
    setTimeout(() =>{
        callback(5);
    },1000)
}
function firstData3(callback){
    setTimeout(() =>{
        callback(5);
    },1000)
}
firstData((value) => {
    firstData2((newValue)=>{
        firstData3((new2) => {
             console.log(value+newValue+ new2); 
        })
    })
})
// here is a delay as they are depends each other.
// This is callback hell
// To solve this callback hell "promises" are introduced.

function firstData(num){
    return new Promise((res,rej)=>{
        setTimeout(() =>{
        res(num);
    },1000)
    }) 
}

function firstData2(num){
    return new Promise((res,rej)=>{
        setTimeout(() =>{
        res(num);
    },1000)
    }) 
}
firstData(5).then((response)=>{
    return firstData2(response+5);
})
.then((response) => {
    console.log(response);
});

// reject

function firstData(num){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(num > 5){
                rej("Failed: number is greater than 5");
            }
            else{
                res(num);
            }
        },1000);
    });
}
function firstData2(num){
    return new Promise((res,rej)=>{
        setTimeout(() =>{
            if(num>10){
                rej("failed: number greater than 10");
            }
            else{
                res(num)
            }
        },1000)
    });
}
firstData(5).then(response =>{
    return firstData2(response+5);
})
.then(response =>{
    console.log(response);
})
.catch(error => {
    console.log("Error:", error);
})
