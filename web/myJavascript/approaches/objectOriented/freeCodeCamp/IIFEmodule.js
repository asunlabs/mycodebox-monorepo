// IIFE is often used to create a module. 
// The module wraps in mixins and increate code reusability

let funModule = (function(){
    return {
        isCuteMixin(obj){
            obj.isCute = () => true
        }, 
        singMixin(obj){
            obj.sing = () => console.log("Singing to an awesome tune")
        }
    }
})()


const jake = { name : "jake" }
funModule.isCuteMixin(jake)
console.log(jake.isCute())
funModule.singMixin(jake)
jake.sing()
