// Create an abstract class : parent class 
interface Animal { 
    age : number, 
    walkOn(road: string):string
}

// Create a concrete class : child class
// Jake_human is an instance of the Animal class
const Jake_human : Animal = {
    age : 27, 
    walkOn(road = "London"):string {
        return `Jake is walking on ${road}`
    } 
}

console.log(Jake_human.walkOn("Tokyo"))

const Roads = (entity : Animal):string => {
    return entity.walkOn("Seoul")
}

console.log(Roads(Jake_human))