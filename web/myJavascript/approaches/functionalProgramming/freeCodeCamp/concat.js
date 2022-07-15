// Array.concat/String.concat combines two arrays/strings together
// returns a new array/string, meaning no mutation for the original array/string
function nonMutatingConcat(original, attach) {
    // Only change code below this line
    console.log(original.concat(attach));

    console.log(
        JSON
        .stringify(original[1])
        .concat(
            JSON
            .stringify(attach[1]))
        .split("")
        );

    return original.concat(attach);
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingConcat(first, second);