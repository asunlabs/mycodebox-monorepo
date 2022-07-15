
// check if 'this' belongs to the created object or globalThis. 
let thisStatus = null; 

// create a function with Function constructor.
const myFunc1 = new Function('x', 'y', 'return x+y;');
console.log(myFunc1(1,2));

// create a function with function literal (easier to script)
function myFunc2(x,y) {
    thisStatus = this;
    if (thisStatus === globalThis) {
        console.log("this not belongs to the object");
    } else {
        console.log("this belongs to the created object"); 
    }
    return x+y;
}

// this status comparision depending on constructor
console.log("not created with constructor : ", myFunc2(1,5));

const newMyFunc2 = new myFunc2();
console.log("created with constructor : ", newMyFunc2); 

