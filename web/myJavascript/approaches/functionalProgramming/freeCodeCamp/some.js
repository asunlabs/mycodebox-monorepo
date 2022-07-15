// Array.some(callback) : checks any element in array
// passes a test. Returns a boolean
// Array.some(callback) <-> Array.every(callback)

function checkPositive(arr) {
    // Only change code below this line
    const result = arr.some((number)=> {
        return number > 0; 
    })

    console.log(result);
    return result;
  
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]); // test 1
  checkPositive([1, 2, 3, 4, 5]); // test 2 
  checkPositive([-1, -2, -3, -4, -5]); // test 3