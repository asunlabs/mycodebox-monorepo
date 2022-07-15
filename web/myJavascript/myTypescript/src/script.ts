import Invoice from "./modules/invoice.js"
import Payment from './modules/payment.js'
import ListTemplate from './modules/listTemplate.js'
import { HasFormatter } from "./interfaces/hasFormatter.js"
import { Validate } from "./modules/validation.js"

const type = document.querySelector("#type") as HTMLSelectElement
const toFrom = document.querySelector("#toFrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amounts = document.querySelector("#amounts") as HTMLInputElement
const result = document.querySelector(".result") as HTMLUListElement

// type casting
type record = HasFormatter
let recordOne : record
let recordTwo : record
let records : record[] = [ ]

// recordOne can be either Invoice or Payment since both 
// invoice and payment class implements HasFormatter interface
recordOne = new Invoice("Jake", "netflix", 55)
recordTwo = new Payment("Paul", "netflix-streaming", 55)

records.push(recordOne, recordTwo)
records.map((item)=>console.log(item.format()))
console.log(amounts.valueAsNumber) // NaN
// type casting in typescript
const newForm = document.querySelector('.newForm') as HTMLFormElement

// submit event
newForm.addEventListener("submit", (e:Event)=> {
    e.preventDefault()

    // declare a tuple
    let inputs: [string, string, number]
    inputs = [toFrom.value, details.value, parseInt(amounts.value)]

    if (Validate(amounts)) {
        switch (type.value) {
            case "Invoice" : 
                const newInv = new Invoice(...inputs) // spread operator
                const ul_invoice = new ListTemplate(result)
                ul_invoice.render(newInv, type)
                break
            case "Payment" : 
                const newPay = new Payment(...inputs)
                const ul_payment = new ListTemplate(result)
                ul_payment.render(newPay, type)
                break
            default : 
                alert("Please select option")
        }
    } else { 
        alert("Amounts should be in number")
    }
})
