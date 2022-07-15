// Array.every(callback): checks if every element in the array passes the test
// isEveryElementPassed ? true : false

function checkPositive(arr) {
    // Only change code below this line
    const result = arr.every((number)=>{
        return number > 0; // return boolean 
    })
    console.log(result);
    return result;
    
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]); // test 1
  checkPositive([1, 2, 3, 4, 5]) // test 2
  checkPositive([1, -2, 3, -4, 5]) // test 3