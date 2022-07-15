// Whenver asynchronous function gets called,
// it always returns a Promise regardless of what's inside
// Since getTodos is asynchronous function, which is non-blocking, 
// even though inside codes are blocking(waiting for Promise get asserted)
// the whole operation is non-blocking.

const getTodos = async () => {
    // fetch returns a Promise
    // await keyword stops Javascript from assigning value to the const response
    // until the Promise is resolved
    // async and await is useful to chain Promises without callback hell 
    const response = await fetch('routes/test2.json')

    if (response.status !== 200) {
        // Use throw new Error to create your own error object
        throw new Error('cannot fetch the data') // c
    }

    const data = await response.json()
    console.log(response)
    console.log(data[0].text)
    return data // remember that asynchronous function always returns a Promise
    // which means async function needs a then method
}

console.log(1)
console.log(2)
getTodos()
        .then(data=>{console.log(data)})
        .catch(err=>{console.log(err.message)}) // non-blocking
console.log(3)
console.log(4)

// async and await is not supported in old browser such as Internet explorer