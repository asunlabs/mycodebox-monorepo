// tutorial from NetNinja 
// See here : https://www.youtube.com/watch?v=a_8nrslImo4&list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu&index=7

// When writing Promise, returns a new Promise is typical
const getSomething = () => { 
    // Promise(resolve callback, reject callback)
    return new Promise((resolve, reject)=>{
        // resolve('some data')
        reject('some error')
    })
}

// Promise.then(onfulfilled, onrejected)
getSomething().then((data)=>{
    console.log(data)
}, (err) => {console.log(err)})

// Promise.then(onfulfilled).catch(onrejected)
getSomething().then(data=>{console.log(data)})
              .catch(err=>{console.log(err)})