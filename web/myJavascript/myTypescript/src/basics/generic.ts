
const bookShelf = (obj:object, title:string):object => {
    console.log(`${title} exists in bookshelf`)
    return  { ...obj }
}

const result = bookShelf( { name : "Jake" , age : 27 }, "funny snowman")
// console.log(result.name, result.age) : name and age properties do not exist 
// this is because when we specify parameter type we said it is "object", not
// "object having name and age properties"

console.log(result) // but it shows the object in browser in a perfect shape, meaning it shows 
// all the properties

// generic <T> enables to decide types later, flexibly
const new_bookshelf = <T>(obj:T, title:string) => {
    console.log(`${title} exists in bookshelf`)
    return { ...obj }
}

const new_result = new_bookshelf({ name : "not jake", age : 277}, "Monster")
console.log(new_result.name, new_result.age) // executable

// generic also enables to follow a certain type
const myGeneric = <T extends { name : string, price : number}>(smartphone:T, madeBy:string):void =>{
    console.log(`${smartphone.name}is ${smartphone.price} dollars. It's from ${madeBy}`)
}

myGeneric({
    name : "Apple", 
    price : 100
}, "United States")

// generic can be done with interface as well
interface Book<T> {
    pages : number, 
    title : T, 
    author : string
}

const myBook : Book<number> = { pages : 55, title : 100, author : "Jake" } // title is a number type 
const yourBook : Book<string> = { pages : 100, title : "Awesome Dogs", author: "Elly" } // title is a string type
