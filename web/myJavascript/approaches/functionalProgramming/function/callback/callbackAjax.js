// sort an array using built-method
const myArr = [4,2,5,6,1,3]; 
myArr.sort(); 
console.log(myArr); // result : [ 1, 2, 3, 4, 5, 6 ]

myArr.unshift(22);
myArr.sort();
console.log(myArr); // result : [1, 2, 22, 3,4, 5,  6] => not fully in order

// function compareFn is a parameter of sort built-in method, meaning
// it is a callback function. Callback function can be customized as long as it returns
// -1 or 0 or 1(promised format). Callback is enabled since function in Javascript is a first-class object. 
function compareFn1(a, b) {
    // business logic : in order
    if (a > b) {
        return 1; // a > b => return 1 : promised format
    } else if (a === b) { 
        return 0; // a === b => return 0 : promised format
    } else { 
        return -1; // a < b => return -1 : promised format
    }
}
 
function compareFn2 (a, b) { 
    // business logic : order in reverse
    return b - a; 
}

let result1 = myArr.sort(compareFn1);
console.log(`result1 is : ${result1}`); // result : [1,2,3,4,5,6,22]

let result2 = myArr.sort(compareFn2); 
console.log(`result2 is : ${result2}`); // result : [22,6,5,4,3,2,1]

// Callback is used in asynchronous process such as Ajax : Asynchronous Javascript And XML 
// Sync : A(done) => B(done) => C(done)
// Async : A(done) => B(not done, working on background) => C(working and done)
// using Ajax, javascript will get some info from server without refreshing webpages(think of
// multi-tasking). Because of this, web becomes more application-wide. 
// whoever called Ajax does not matter form the server perspective as long as promised
// format is kept intact. Business logic will vary depending on how the callback function 
// is defined just like explained above
// server : deliver info => client get the info (the info is shown with Ajax) => what to do with
// the info varies by user (delegated by callback function like aobve Array.sort(compareFn1 or compareFn2))