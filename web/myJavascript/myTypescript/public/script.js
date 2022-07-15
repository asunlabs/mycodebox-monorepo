import Invoice from "./modules/invoice.js";
import Payment from './modules/payment.js';
import ListTemplate from './modules/listTemplate.js';
import { Validate } from "./modules/validation.js";
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amounts = document.querySelector("#amounts");
const result = document.querySelector(".result");
let recordOne;
let recordTwo;
let records = [];
// recordOne can be either Invoice or Payment since both 
// invoice and payment class implements HasFormatter interface
recordOne = new Invoice("Jake", "netflix", 55);
recordTwo = new Payment("Paul", "netflix-streaming", 55);
records.push(recordOne, recordTwo);
records.map((item) => console.log(item.format()));
console.log(amounts.valueAsNumber); // NaN
// type casting in typescript
const newForm = document.querySelector('.newForm');
// submit event
newForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // declare a tuple
    let inputs;
    inputs = [toFrom.value, details.value, parseInt(amounts.value)];
    if (Validate(amounts)) {
        switch (type.value) {
            case "Invoice":
                const newInv = new Invoice(...inputs); // spread operator
                const ul_invoice = new ListTemplate(result);
                ul_invoice.render(newInv, type);
                break;
            case "Payment":
                const newPay = new Payment(...inputs);
                const ul_payment = new ListTemplate(result);
                ul_payment.render(newPay, type);
                break;
            default:
                alert("Please select option");
        }
    }
    else {
        alert("Amounts should be in number");
    }
});
