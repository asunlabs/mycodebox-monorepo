// Unlike common js is only used in Node.js, ES6 is used in browser. 
// Importing modules with file:// is not supported
export const greeting = (name) => { 
    return console.log("hello", name)
}

export const notGreeting = (name) => {
    return console.log("not hello", name)
}
