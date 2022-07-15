// this in javascript means function calling context. 
// this is changeable depending on how the function is called

function checkThis() {
    if (globalThis === this) {
        console.log(true);
    } else {
        console.log(false);
    }
}

checkThis(); // result : true

// In broswer, it should be
function checkThisBrowser() {
    if (window === this) {
        console.log(true);
    } else {
        console.log(false);
    }
}

checkThisBrowser(); // result : true