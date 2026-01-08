// // var creates ONE variable per function, not per iteration
// for(var i=0;i<3;i++){
//     setTimeout(() =>{
//         console.log(i)
//     },1000);
// }
// // loop finishes i=3;
// // 3,3,3
// for(let i=0;i<3;i++){
//     setTimeout(() => {
//         console.log(i);
//     },1000);
// }
// // 0,1,2

function getUser() {
  setTimeout(() => {
    return "User";
  }, 1000);
}
console.log(getUser());

// return happens inside async
// callback solution
function getUs(callback) {
  setTimeout(() => {
    callback("User data");
  }, 2000);
}
getUs((data) => {
  console.log(data);
});

// Handle API error properly

const fetchData = async () => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("API failed");
    }
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};

const fetchDta = async () => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("API failed");
    }
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};
// GENERIC (Reusable)
// A function written ONCE that can be reused in MANY places for DIFFERENT purposes

// fetchUser()
// fetchTodo()
// fetchPosts()
// fetchComments()
// Each one:

// Does the SAME thing (call API)

// Just different URLs

const apiRequest = async (url, options = {}) => {
  // Default parameter , If nothing is passed => empty object {}
  // here URL can change

  // Method can change

  // Body can change

  // Headers can change
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    throw err;
  }
};

// How loadTodo use it =>
const loadTodo = async () => {
  try {
    const data = await apiRequest(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};

//  1. Create a Promise that resolves with the message "Data loaded!" after 2 seconds. Then use .then() to log the message.
const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Data Loaded!");
  }, 2000);
});
promise.then((res) => {
  console.log(res);
});

// async / await version

const loadData = async () => {
  const res = await new Promise((res, rej) => {
    setTimeout(() => {
      res("Data Loaded");
    }, 2000);
  });
  console.log(res);
};
loadData();

//  Create a Promise that rejects after 1 second with the error "Network error". Handle it with .catch() to log the error message.

const prom = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Network Error");
  }, 1000);
});
prom
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
// promise rejected => .then() skipped => .catch() executed

//  Create a Promise that resolves after 2 seconds with "Success". Use .finally() to log "Promise completed" after it's done (whether resolved or rejected).
const promie = new Promise((res, rej) => {
  setTimeout(() => {
    res("Success");
  }, 2000);
});
promie
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise completed");
  });
// finally() runs no matter

// promise chain
// Create a Promise that resolves with the number 5. Chain it to multiply the number by 2, then add 10, and finally log the result (should be 20).
const promii = new Promise((res, rej) => {
  res(5);
});
promii
  .then((val) => {
    return val * 2;
  })
  .then((res) => {
    return res + 10;
  })
  .then((final) => {
    console.log(final);
  });

// returning a value automatically creates a new resolved Promise => key to chaining
// Whatever you return from .then() becomes the input for the next .then().

// async / await version

async function run() {
  const res = await Promise.resolve(5); //as it is already resolved no need for new
  res = res * 2;
  res = res + 10;
  console.log(res);
}
run();

//  Create three function which returns a Promise. All functions need to be called in parallel.
// Call all functions in parallel
function task1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("data1");
    }, 1000);
  });
}

function task2() {
  return new Promise((res) => {
    setTimeout(() => {
      res("data2");
    }, 2000);
  });
}

function task3() {
  return new Promise((res) => {
    setTimeout(() => {
      res("data3");
    }, 3000);
  });
}
Promise.all([task1(), task2(), task3()]).then((rs) => {
  console.log(res);
});

// Create a Promise which resolves in 3 seconds, after resolving log message "Login successful". Use async/await.
const resolv = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  console.log("Login Successful");
};
resolv();

// Fetch data from two APIs sequentially:
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/users
// Then merge both so each post includes its author’s name and email.

// Not good for large data
async function fetchAuthorPosts() {
  try {
    const resPost = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await resPost.json();
    const userRes = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await userRes.json();

    const merge = [];
    posts.forEach((post) => {
      users.forEach((user) => {
        if (post.userId === user.id) {
          merge.push({
            ...post,
            author: user.name,
            email: user.email,
          });
        }
      });
    });
    console.log(merge);
  } catch (err) {
    console.log(err.message);
  }
}

// lookup object method

async function fetchAuthorPost() {
  try {
    const respost = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await respost.json();
    const userRes = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await userRes.json();

    const userMap = {}; //empty lookup object
    // Fill the lookup object
    users.forEach((user) => {
      //JavaScript sees:
      // userMap[1] = { name: "...", email: "..." }
      // which becomes :
      // userMap = {
      //  1: {name:"Leaneejhb", email:"lewasd@gmail.com"}
      // }
      userMap[user.id] = {
        name: user.name,
        email: user.email,
      };
    });
    // Use lookup object while merging
    const mergedd = posts.map((post) => {
      const user = userMap[post.userId];
      return {
        ...post,
        author: user.name,
        email: user.email,
      };
    });
    console.log(mergedd);
  } catch (err) {
    console.log(err.msg);
  }
}
fetchAuthorPost();
