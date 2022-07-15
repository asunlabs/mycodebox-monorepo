const display = document.querySelector(".display") as HTMLHeadingElement // type casting
const dataTarget = display.getAttribute('data-target') as string
const cantDoThis = document.querySelector(".display") as HTMLHeadingElement

const ConvertToInt = (chr : string):number => {
    return parseInt(chr)
} 

// increase value i to 100 
// reflect the i in html
// stop if i reaches 100
const IncreaseToTarget = (target: number):void => {
        if (count<target) { 
            display.textContent = `${count}`
            count++
            setTimeout(Wrapper, speed)
        }
    }
    
const Wrapper = () => {
    IncreaseToTarget(target)
}

// set endpoints 
let count :number = 0
const speed : number = 10
const target :number = ConvertToInt(dataTarget)

// initiate

window.addEventListener("load", ()=>{
    const counter = document.querySelector(".counter") as HTMLElement
    setTimeout(()=>{
        counter.style.display = "block"
        display.classList.add("active")
        IncreaseToTarget(target)
    }, 2000)
})