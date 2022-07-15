// class 
class Invoice {
    constructor(client, details, // private property is only accessible within class
    amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // method
    format() {
        return (`${this.client} owes $${this.amount} for ${this.details}`);
    }
}
export default Invoice;
