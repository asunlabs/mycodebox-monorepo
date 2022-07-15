// Common.js is a Javascript module format standard, which is mainly used 
// in Node js. It allows code encapsulation with no global variables. 
// syntax : module.exports => encapsulating codes
// require => fetch the encapsulated codes 
// However, common js module does not exist in browser. 
const greeting = (name) => { 
    return console.log("hello", name)
}

const notGreeting = (name) => {
    return console.log("not hello", name)
}

// export a single entity : module.exports = func
// module.exports = notGreeting

// export multiple entities : module.exports = { key1 : val1, key2 : val2, ... }
// exporting in Node.js : 1) module.exports 2) exports.function(){ // do something here }
// 1) module.exports
module.exports = { 
    greeting : greeting, 
    notGreeting : notGreeting
}

// 2) exports.function 
// exports.myFunc = ( ) => {
//     console.log(myFunc)
// }
