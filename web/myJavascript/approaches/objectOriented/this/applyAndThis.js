const o = {name : "o"}; 
const p = {name : "p"}; 

function myFunc() {
    switch(this) {
        case o :
            console.log("this : ", o); 
            break;
        case p : 
            console.log("this : ", p);
            break;
        case globalThis : 
            console.log("this is : ", globalThis);
            break;
    }
}

myFunc();
myFunc.apply(o); 
myFunc.apply(p); 