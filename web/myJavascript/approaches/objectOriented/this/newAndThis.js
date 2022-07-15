// if an object is created with new keyword, this keyword 
// will point to the object. 
// if not, this keyword will point to global object depending on
// its environment. 

let funcThis = null; 

function myFunc() {
    funcThis = this;
}

const o1 = myFunc(); 

if (funcThis === globalThis) {
    console.log("same with globalthis");
}

// this in constructor points to the object created with the constrcutor
const o2 = new myFunc(); // creat an object with new keyword

if (funcThis === o2) {
    console.log("same with created object"); 
}