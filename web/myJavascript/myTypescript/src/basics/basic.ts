const character = 'mario'
console.log(character)

const inputs = document.querySelectorAll('input')

inputs.forEach((item)=> console.log(item))

const myConst = 'testing'

let typeTest = 40
// typeTest = 'hello' : can't do this

typeTest = 50 // can do this

const templateliteral = `hello world ${55}`

let isAwesome = true
isAwesome = false

// set a type for function parameter with colon in typscript
const circle = (diameter : number) => {
    return diameter * Math.PI
}

console.log(circle(55))

// array contains the same types of elements 
let names = ['one', 'two', 'three'] // string array
names.push('four')

let mixedNames = ['hello', true, 9] // string, boolean, number array
// mixedNames.push('wow', 5, {}) // can't do this
mixedNames.push(false) // can do this

// object 
let person = {
    name : 'jake', 
    age : 27 // person.age = 'wow' // can't do this
}

let man : object = { }
man = { name : 'jake', age : 27 }

let woman : {
    name : string, 
    age : number
}

// person[nickName] = 'awesome' // can't add a new property to object once declared

// explicit type
let thisIsNumber : number
let thisIsString : string
let thisIsStringArray : string[] = []
thisIsStringArray.push('hello', 'world')
console.log(thisIsStringArray[0], thisIsStringArray[1])
// thisIsString = 4 // can't do this

// union types
let mixed : (string|number)[] = []
mixed.push('four', 4)
console.log(mixed[0], mixed[1])

let uid : string | number
uid = 'five'
uid = 5
console.log(uid)