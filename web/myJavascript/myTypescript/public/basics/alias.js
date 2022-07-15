"use strict";
// function without type alias
function hello(name) {
    console.log("hello : ", name);
}
function hiThere(name) {
    return "hello" + name;
}
// function with type alias 
function sayHelloTo(person) {
    console.log(`hello, ${person.name}!`);
}
