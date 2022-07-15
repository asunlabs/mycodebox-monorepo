const getTodos = (resource) => { 

    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest()
    
        request.addEventListener("readystatechange", ()=>{
            if (request.readyState === 4 && request.status === 200) { 
                const data = JSON.parse(request.responseText)
                // callback(null, data)
                resolve(data)
            } else if (request.readyState === 4) { 
                // callback('could not fetch data', undefined)
                reject('could not get the resource')
            }
        })
        
        // Use this for url : 1) https://jsonplaceholder.typicode.com/todos/ or
        // 2) todos.json in this directory
        // 3) todos.json in this/route directory
        request.open("GET", resource)
        request.send()
    })
}

// Chaining Promises instead of callback hell
getTodos('route/test1.json').then(data => {
    console.log("promise 1 resolved", data)
    return getTodos('route/test25.json')
}).then( data => {
    console.log("promise 2 resolved", data)
    return getTodos('route/test3.json')
}).then( data => { 
    console.log("promise 3 resolved", data)
}).catch( err => {
    console.log(err)
})


// Non blocking test 
// console.log(1)
// console.log(2)

// // callback parameter convention : err, data (in order)
// getTodos((err, data)=>{
//     console.log("callback called")
//     err !==null ? console.log("could not fetch data") : console.log(data)
// })

// console.log(3)
// console.log(4)
// // Non blocking test result : 1,2,3,4, data