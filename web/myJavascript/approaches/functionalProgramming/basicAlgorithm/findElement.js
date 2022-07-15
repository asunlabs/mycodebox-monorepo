function findElement(arr, func) {
    let num = 0;
    let bowl = new Array();

    for (let key in arr) {
        if (func(arr[key]) === true) {
            bowl.push(arr[key]);
            console.log(bowl[0]); 
            return bowl[0];
        } else {
            num = undefined;
        }
    }
    console.log(num); 
    return num;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);


//   const testing = [1,1,2,2,3,4];
//   console.log(testing.indexOf(2)); 

function doFind(arr, func) {
    // Returns the value of the first element in the array where predicate is true, and undefined otherwise.
    console.log(arr.find()); 
}

doIndexOf([1,2,33,4], num => num % 3 === 0); 