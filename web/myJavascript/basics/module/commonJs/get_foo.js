// Requiring a common js module.  
const foo = require('./foo.js') // not beging affected by .js unlike browser

foo.greeting("jake")
foo.notGreeting("jake")

// Requiring module also can be done in conditions
if ( true ) { 
    const foo_condition = require('./foo.js') // The require is just a function so this line works
    foo_condition.notGreeting("jake_condition")
}

// Requiring module with destructuring : getting only what you need, not the whole module
if (true) { 
    const { greeting, notGreeting } = require('./foo.js')
    greeting("jake")
    notGreeting("not jake")
}