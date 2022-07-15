import { HasFormatter } from "../interfaces/hasFormatter"

// class 
class Invoice implements HasFormatter{
    constructor(
        readonly client : string,
        private details : string, // private property is only accessible within class
        public amount : number,
    ){}

    // method
    format() {
        return (`${this.client} owes $${this.amount} for ${this.details}`)
    }
}

export default Invoice