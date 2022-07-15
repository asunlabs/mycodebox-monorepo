// arity : the number of paramters in a function
// currying : spliting function A(a,b,c) into 
// function one(a), function two(b), function three(c)
// the merit of currying is that you can save each 
// function call into a variable and deliver the rest of 
// parameters when available. 

function add(x) {
    // Only change code below this line
    return function (y) {
        return function (z) {
            return x + y + z;
        } 
    }
    // Only change code above this line
  }
  

const partial_add = add(1); // hold the add function with only 1 parameter.
console.log(partial_add(2)(3)); // result : 6

add(10)(20)(30); // test 1
add(1)(2)(3); // test 2
add(11)(22)(33); // test 3