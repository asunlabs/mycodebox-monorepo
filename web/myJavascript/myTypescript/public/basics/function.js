"use strict";
let greeting;
greeting = (name) => {
    console.log(`I am ${name}'s function`);
};
// optional paramter : add question mark 
// default parameter : set an initial value for parameter
// optional and default cannot be used at the same time
const add = (a, b, c = "hello jake") => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
greeting('Jake');
// Typescript provides a way to clarify parameter types and 
// even return types. 
const minus = (a, b) => {
    return `${(a - b).toString()} is your minus function value`;
};
console.log(minus(10, 7));
