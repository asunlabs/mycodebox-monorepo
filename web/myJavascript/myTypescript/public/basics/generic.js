"use strict";
const bookShelf = (obj, title) => {
    console.log(`${title} exists in bookshelf`);
    return Object.assign({}, obj);
};
const result = bookShelf({ name: "Jake", age: 27 }, "funny snowman");
// console.log(result.name, result.age) : name and age properties do not exist 
// this is because when we specify parameter type we said it is "object", not
// "object having name and age properties"
console.log(result); // but it shows the object in browser in a perfect shape, meaning it shows 
// all the properties
// generic <T> enables to decide types later, flexibly
const new_bookshelf = (obj, title) => {
    console.log(`${title} exists in bookshelf`);
    return Object.assign({}, obj);
};
const new_result = new_bookshelf({ name: "not jake", age: 277 }, "Monster");
console.log(new_result.name, new_result.age); // executable
// generic also enables to follow a certain type
const myGeneric = (smartphone, madeBy) => {
    console.log(`${smartphone.name}is ${smartphone.price} dollars. It's from ${madeBy}`);
};
myGeneric({
    name: "Apple",
    price: 100
}, "United States");
const myBook = { pages: 55, title: 100, author: "Jake" }; // title is a number type 
const yourBook = { pages: 100, title: "Awesome Dogs", author: "Elly" }; // title is a string type
