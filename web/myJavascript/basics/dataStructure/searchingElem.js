function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i=0; i<arr.length; i++) {
      // Array.indexOf(element) in JS returns the first index of the element if exists.
      // if not, returns -1.
        if (arr[i].indexOf(elem) === -1) {
          newArr.push(arr[i]);
        }
    }
    // Only change code above this line
    return newArr;
  }
  
  // change code here to test different cases
  // case 1
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  
  // case 2
  console.log(filteredArray([[33,22,44,1], [2,4,6,8,10], [22, 9,75,34,20]], 22))