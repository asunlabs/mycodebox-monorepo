// keyword argument points to arguments in javascript

// even though function parameters not defined, JS will find the parameters
// and returns no error.
function testing() {
    console.log("your argument is : ", arguments); 
    console.log("its length is : ", arguments.length) // similar to Array.length
    console.log("its type is : ",typeof(arguments)); 
    console.log("arguments called in : ", arguments.callee);
}


// argument returns object. The object has : 1) length 2) callee 
testing(1,2,3); 

function sum() {
    let total = 0; 

    for (let key in arguments) { // or let i=0; i<arguments.length; i++
        total += arguments[key];
    }
    return total;
}

console.log(sum(2,3,5)); 

// comparision : argument.length vs function.length
// argument.length - the number of defined parameters
// function.length - the number of actually delivered parameters

function count(num) { // function.length : 1
    // console.log(result); 
    console.log("how many parameters delivered : ", count.length);
    console.log("how many parameters defined : ", arguments.length);
    console.log(num); // result : 1 
}

count(1,2); // argument.length : 2

// comparing function.length with arguments.length forces developers to stick to
// the function definition written. 