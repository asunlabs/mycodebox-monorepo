// relative path and file extension is required for destructured import
import { uppercaseString, lowercaseString } from './export.js'
uppercaseString("hello")
lowercaseString("WORLD!")

// Only change code above this line



// Importing in Node js(backend)
// const { uppercaseString, lowercaseString } = require('./export')

// const myLogger = (cb1, cb2) => { 
//     console.log(cb1, cb2)
// }

// myLogger(uppercaseString("hello"), lowercaseString("WORLD!"))