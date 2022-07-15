// fetch returns a Promise, which only gets rejetced in the case of
// network failure.

fetch('route/test1.json').then((response)=>{
    console.log("resolved", response, response.json)
    // response.json converts json to js object and returns a Promise
    return response.json() // returns a Promise
}).then(data=>{ // Promise chain
    console.log(data) // data from the response.json method
}).catch((err)=>{
    console.log("rejected", err)
}); 
