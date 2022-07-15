// each programming language has their own way to implement 
// object-oriented programming. Javascript is a prototype-based one.
// a goal is to create nice modules that are well separated by their
// functionality and data. 

// constructor in javascript : constructor is a function. The function is 
// to create object and set object properties needed. When constructor gets called, 
// 1) new empty object created 2) this keyword starts to refer the newly created
// object 3) the newly created object returns. 

// see this reference for more : https://www.educative.io/edpresso/what-is-a-constructor-in-javascript

// how constructor is declared in javascript: (object) = (new)(function)
// comparision : in Python -> (object) = class(containing constructor inside)

function plus (obj1, obj2) {
    console.log(obj1, obj2);
}

const myObj_first = {}; // Create an object #1
myObj_first.name = "plus_old";
console.log(myObj_first);

const myObj_second = new plus(); // Create an object #2
myObj_second.name = "plus_new";
console.log(myObj_second);

plus(myObj_first, myObj_second);

// function in Javascript play a constructor role. With this keyword, 
// it will initialize each object it creates. Should be done to increase
// code reusability

