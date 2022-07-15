"use strict";
const character = 'mario';
console.log(character);
const inputs = document.querySelectorAll('input');
inputs.forEach((item) => console.log(item));
const myConst = 'testing';
let typeTest = 40;
// typeTest = 'hello' : can't do this
typeTest = 50; // can do this
const templateliteral = `hello world ${55}`;
let isAwesome = true;
isAwesome = false;
// set a type for function parameter with colon in typscript
const circle = (diameter) => {
    return diameter * Math.PI;
};
console.log(circle(55));
// array contains the same types of elements 
let names = ['one', 'two', 'three']; // string array
names.push('four');
let mixedNames = ['hello', true, 9]; // string, boolean, number array
// mixedNames.push('wow', 5, {}) // can't do this
mixedNames.push(false); // can do this
// object 
let person = {
    name: 'jake',
    age: 27 // person.age = 'wow' // can't do this
};
let man = {};
man = { name: 'jake', age: 27 };
let woman;
// person[nickName] = 'awesome' // can't add a new property to object once declared
// explicit type
let thisIsNumber;
let thisIsString;
let thisIsStringArray = [];
thisIsStringArray.push('hello', 'world');
console.log(thisIsStringArray[0], thisIsStringArray[1]);
// thisIsString = 4 // can't do this
// union types
let mixed = [];
mixed.push('four', 4);
console.log(mixed[0], mixed[1]);
let uid;
uid = 'five';
uid = 5;
console.log(uid);
