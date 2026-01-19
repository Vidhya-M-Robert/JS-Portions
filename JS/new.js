// async function fetchAuthorPost(){
//     try{
//     const resPost = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await resPost.json();
//     const resUser = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await resUser.json();

//     const userMap= {};   //create 

//     users.forEach((user)=>{    //fill
//         userMap[user.id] = {
//             name: user.name,
//             email: user.email
//         };
//     });

//     const merged = posts.map((post)=>{   //merge
//         const user = userMap[post.userId];
//         return {
//             ...post,
//             author: user.name,
//             email: user.email
//         };
//     });
//     console.log(merged);
//     }
//    catch(err){
//     console.log(err.message);
//    }
// }
// fetchAuthorPost();






async function fetchAuthorPost(){
    try{
    const postRes = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await postRes.json();
    const userRes = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await userRes.json();

    let userMap = [];
    posts.forEach((post)=>{
        users.forEach((user)=>{
            if(post.userId === user.id){
                userMap.push({
                    ...post,
                    author: user.name,
                    email: user.email
                })
            }
        })
    })
    console.log(userMap)
    }
    catch(err){
        console.log(err);
    }
}
fetchAuthorPost();