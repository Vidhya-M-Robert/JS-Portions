const promise = new Promise((res,rej) => {
    res("Success!")
}) // new instance of promise and it takes two parameters, Creation of promise 

promise.then((response) =>{
    console.log(response);
})  // to access the promise

// by using promise there is no need for callback

const promis = new Promise((res,rej) =>{
    setTimeout(() =>{
        res("Sucess");
    },3000)
})
promis.then((response)=>{
    console.log(response);
});

// if rejects
const promie = new Promise((res,rej) =>{
    rej("Faileeeeed");
});
promie.then((response)=>{
    console.log(response)
})
.catch((error) =>{
    console.log(error);
})

// 

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


// promise.all()
const promise1 = new Promise((res,rej)=>{
    res(["JavaScript","Java"]);
});
const promise2 = new Promise((res,rej) => {
    // res(["React","Angular"]);
    rej("Failed");
});

promise1.then((response) =>{
    console.log(response);
});
promise2.then((response)=>{
    console.log(response)
});
const allPromises = Promise.all([promise1,promise2])     //take an array of promises and it returns a new promise
allPromises.then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error);
})
// promise.all rejects if one of the api get rej, so promise.all is used when it need to reject if any one of the api gets fail
// promise.all work only on all success case

// To make it 1 array use flat();
const promise3 = new Promise((res,rej)=>{
    res(["Java", "Python"]);
});
const promise4 = new Promise((res,rej)=>{
    res(["react","angular"]);
})
const allPromise = Promise.all([promise3,promise4]);
allPromise.then(res =>{
    console.log(res.flat());   // can give inifinity for 2 or more nested.
})
.catch((err)=>{
    console.log(err);
});

// promise.allSettled (provide status like whether it is fulfilled or rejected)  => opposite of promise.all()
// Used where the API 's are not depend each other.

const promise5 = new Promise((res,rej) =>{
    res(["data1","data2"]);
});
const promise6 = new Promise((res,rej)=>{
    rej("Failed");
})
const promiseAll = Promise.allSettled([promise5,promise6]);
promiseAll.then(response =>{
    console.log(response);
})
.catch(error => {
    console.log(error);
})  //we can filter and use the value of fulfilled ones


const promise9 = new Promise((res,rej) =>{
    res(["data3","data4"]);
    // rej("failed");
});
const promise10 = new Promise((res,rej)=>{
    res(["data1","data2"]);
    // rej("Failed");
})
const promiseall = Promise.any([promise9,promise10]);
promiseall.then(response =>{
    console.log(response);
})
.catch(error => {
    console.log(error);
})
//  any returns a single promise, if EVERYTHING fails it returns "All promises were rejected"


// race => returns a single promise as soon as it fails or succeeds
const promise11 = new Promise((res,rej) =>{
    // res(["data3","data4"]);
    rej("failed 1");
});
const promise12 = new Promise((res,rej)=>{
    res(["data1","data2"]);
    // rej("Failed 2");
})
const promiseallrace = Promise.race([promise11,promise12]);
promiseallrace.then(response =>{
    console.log(response);
})
.catch(error => {
    console.log(error);
})