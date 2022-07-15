interface Person { 
    name : string
    age : number
}

interface Jake extends Person { 
    gender : string
}

const jake : Jake = { 
    name: "Jake", 
    age: 27, 
    gender: "male"
}

console.log(jake)