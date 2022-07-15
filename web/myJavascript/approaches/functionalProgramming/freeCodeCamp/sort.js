// Javascript sorting method : string Unicode point value
// encouraged to provide callback (compare fx) to decide order : ascending/descending/unchanged
// 1 : desc, 0 : unchanged, -1 : asc

function alphabeticalOrder(arr) {
    // Only change code below this line
    
    const testing = arr.sort(function(a, b) {
        return a === b ? 0 : a < b ? -1 : 1;
      });

      console.log(testing);
      return testing; 
    // Only change code above this line
  }
  
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);