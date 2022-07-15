// class example
// Invoice class implements HasFormatter interface, meaning its method 
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // method
    format() {
        return (`${this.client} owns $${this.amount} for ${this.details}`);
    }
}
const invOne = new Invoice("Jake", "drink", 8);
const invTwo = new Invoice("Elly", "house", 100);
// variable : variable type = initial value
let invoices = [];
invoices.push(invOne, invTwo);
invoices.forEach((item) => {
    console.log(item.client, item.amount, item.details, item.format());
});
export {};
