// Callback is just a code convention in Javascript
// When a function is delivered as a parameter, it is called callback. 
// callback hell happens when too many callbacks are nested

function doThis(number, callback) {
    const random = Math.floor(Math.random()*number)

    if (random > 3) { 
        callback(true, "bigger than 3")
    } else { 
        callback(false, "smaller than 3")
    }
}

// Pyramids shape of callback hell. Hard to read and difficult to scale
// Use promise to avoid callback hell. 
doThis(10, (check, message)=>{
    console.log(check, message)
    doThis(9,(check, message) => { 
        console.log(check, message)
        doThis(8, (check, message)=>{
            console.log(check,message)
        })
    })
})