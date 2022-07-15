import  { HasFormatter } from '../interfaces/hasFormatter.js' // import interface

// class example
// Invoice class implements HasFormatter interface, meaning its method 
class Invoice implements HasFormatter{
    constructor(
        readonly client : string,
        readonly details : string,
        readonly amount : number,
    ){}

    // method
    format() {
        return (`${this.client} owns $${this.amount} for ${this.details}`)
    }
}

const invOne = new Invoice("Jake", "drink", 8)
const invTwo = new Invoice("Elly", "house", 100)

// variable : variable type = initial value
let invoices:Invoice[]= []

invoices.push(invOne, invTwo)

invoices.forEach((item)=>{
    console.log(item.client, item.amount, item.details, item.format())
})