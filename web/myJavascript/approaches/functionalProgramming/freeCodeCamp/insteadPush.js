// Functional programming is all about creating and 
// using non-mutating functions.

function nonMutatingPush(original, newItem) {
    // Only change code below this line
    console.log(original.concat(newItem));
    console.log(`original : ${original}, newItem : ${newItem}`); 
    return original.concat(newItem);
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingPush(first, second);