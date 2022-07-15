// function signature : specifying arguments and return value of function
let greetings: (a:string, b:string) => void

greetings = ( city : string, country : string, age? : number) => {
    return 'Tokyo' + 'Japan' + (28).toString()
}

let calc: (a: number, b: number, c: string) => number

calc = (one: number, two:number, name:string ):number => {
    if (name === "jake") { 
        return one + two // should return number
    } else { 
        return one - two // should return number
    }
}

let logDetails : (obj : { name : string, age : number }) => void

logDetails = (person : { name : string, age : number }) => {
    return 5
}