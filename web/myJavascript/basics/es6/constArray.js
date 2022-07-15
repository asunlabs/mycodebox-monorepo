// Using const declaration only prevents a reassignement 
// of the same variable identifier. It does not perfectly
// prevent data mutation

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s.pop()
  s.unshift(2)
  console.log(s)
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();