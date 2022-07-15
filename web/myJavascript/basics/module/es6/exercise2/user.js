// export default is available for one thing only, usually class.
export default class User { 
    constructor(name, age) { 
        this.name = name
        this.age = age
    }
}

export const printName = (user) => { 
    console.log(`user name : ${user.name}`)
}

export const printAge = (user) => { 
    console.log(`user age : ${user.age}`)
}

// const moduleTest = require('./module_hello')

// console.log(moduleTest.testing)
