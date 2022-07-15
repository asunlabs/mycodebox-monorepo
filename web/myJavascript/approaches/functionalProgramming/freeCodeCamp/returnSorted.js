const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
    let dummy = new Array(); // new array for non-mutation
    dummy = dummy.concat(arr) 
    dummy.sort((a,b)=>{return a-b;});

    console.log(dummy);
    console.log(arr);
    console.log(globalArray);
    return dummy;
  // Only change code above this line
}

nonMutatingSort(globalArray);