// primitive data type as a parameter 
const num1 = 1;

function primitiveParameter(num2) {
    num2 = 2;
}

primitiveParameter(num1); // num1 = num2, num2=2
console.log(num1); // result : 1 

// object data type as a parameter
const firstObject = {id:1}; 

function objectParamter(myObject) {
    myObject.id = 2;
}

objectParamter(firstObject); 
console.log(firstObject.id); // result : 2