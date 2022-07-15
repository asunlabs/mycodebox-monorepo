// Destructuring assignment is special syntax introduced in ES6,
// for neatly assigning values taken directly from an object.

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
const { yesterday, today } = HIGH_TEMPERATURES;
console.log(yesterday, today)
  
  // Only change code above this line


  const HIGH_TEMPERATURES2 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
    
  const {today : highToday, tomorrow :highTomorrow } = HIGH_TEMPERATURES2
  console.log(highToday, highTomorrow)
  // Only change code above this line


  // spread operator : unpack all contents
  // destructuring : can choose what to unpack
  let a = 8, b = 6;
// Only change code below this line

let testing = [a,b] = [b,a]
console.log(testing)




const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line

  const [a,b, ...arr]= list
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr)