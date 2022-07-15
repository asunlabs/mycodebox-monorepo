// In javascript, function is an object. And a user-defined function 
// like below is an instance of Javascript Function object. 

myFunc(1,2,3)
console.log(arguments.length, myFunc.length); // result : 5, 2 

// function.apply takes 1) object 2) parameters of the object as parameters 
myFunc.apply(null, [2,5]); 

const myObject = { };
const myArgument = [];

function myFunc(first, second) {
    console.log(first+second); 
    console.log("I am instance of Function object");
}    

