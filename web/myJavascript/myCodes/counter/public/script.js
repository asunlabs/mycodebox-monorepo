"use strict";
const display = document.querySelector(".display"); // type casting
const dataTarget = display.getAttribute('data-target');
const cantDoThis = document.querySelector(".display");
// increase value i to 100 
// reflect the i in html
// stop if i reaches 100
// cantDoThis.innerHTML = 4 // : copile error : in Typescript since innerHTML is string | null
const ConvertToInt = (chr) => {
    return parseInt(chr);
};
const IncreaseToTarget = (target) => {
    if (count < target) {
        display.textContent = `${count}`;
        count++;
        setTimeout(Wrapper, speed);
    }
};
const Wrapper = () => {
    IncreaseToTarget(target);
};
// set endpoints 
let count = 0;
const speed = 10;
const target = ConvertToInt(dataTarget);
// initiate
window.addEventListener("load", () => {
    const counter = document.querySelector(".counter");
    setTimeout(() => {
        counter.style.display = "block";
        display.classList.add("active");
        IncreaseToTarget(target);
    }, 2000);
});
