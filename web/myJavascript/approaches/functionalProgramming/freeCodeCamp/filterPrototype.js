// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  
  for (let key in this) {
      if (Boolean(callback(this[key]))) { // Use this keyword to approach to Array instance
        newArray.push(this[key]);
      }; 
  }
  console.log(newArray);
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});



console.log(new_s);

// falsy value in Javascript
// [false, 0, 0n, "", null, undefined, NaN]