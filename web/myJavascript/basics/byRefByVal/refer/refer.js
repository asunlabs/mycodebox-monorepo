
// changing value in primitive does not affect original. 
// primitive : 1) number 2) string 3) boolean 4) null 5) undefined
let a = 1; 
let b = a; // a : 1, b : 1
b = 2; // a : 1, b : 2

if (typeof(a)===typeof(b)) {
    console.log(true); 
}

if (a === b) {
    console.log(true); 
} else { 
    console.log(a, b); // result : a : 1, b : 2
}

// changing value in object affects original (reference)
let firstObject = {name:"first", age:1}; 
let secondObject = firstObject; 

secondObject.name = "second";

console.log(firstObject.name); // result : "second" 

secondObject = {name:"third"}; // new object is created and assigned

console.log(secondObject.name); // result : "third"