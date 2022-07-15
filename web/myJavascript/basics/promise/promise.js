// Promise : a certain of action will be either 1) resolved
// or 2) rejected. Promise(callback<resolve, reject>)
// Promise is a proxy for a value not necessarily known 
// when the promise is created.
// Eventual completion / asynchronous operation.
// Useful when something taking long time to complete happens in background
// such as downloading images from server.

// Promise(executor) returns a Promise object
let p = new Promise((resolve, reject)=>{
    let testing = 5

    testing === 2 ? resolve("sucess") : reject("failed")
})

console.log(p)

// then(callback) : Attaches callbacks for the resolution
// and/or rejection of the Promise. Returns the Promise
p.then((message)=> { // promise resolved
    console.log("resolved : ", message)
}).catch((message)=>{ // promised rejected
    console.log("rejected : ", message)
}).finally(()=>{ // promise settled
    console.log("all done")
})

// exercise
function myFirstPromise(userName) {
    const user = userName
    return new Promise((resolve, reject)=>{
        user==="Jake" ? resolve(`${user} is writing in Promise`) 
                      : reject(`${user} is not correct`)
    })
}

myFirstPromise("Jake").then((msg)=>{console.log(msg)})
                      .catch((msg)=>{console.log(msg)})
                      .finally((msg)=>{console.log("Promise settled")})
