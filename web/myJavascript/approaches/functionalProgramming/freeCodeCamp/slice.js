// Array.slice copies an array and returns a new array (no mutation)
// Array.slice(start, end) => last element not included
function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    
    console.log(anim.slice(beginSlice, endSlice));
    return anim.slice(beginSlice, endSlice)
  
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);