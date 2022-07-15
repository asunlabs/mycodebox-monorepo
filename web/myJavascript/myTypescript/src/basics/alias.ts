// create a type alias for future reuse
type ChrOrNum = string | number
type objWithName = { name : string, uid : string | number }

// function without type alias
function hello(name: string | number) { 
    console.log("hello : ", name)
}

function hiThere(name: string | number):string { 
    return "hello" + name
}

// function with type alias 
function sayHelloTo( person : objWithName ) {
    console.log(`hello, ${person.name}!`)
}