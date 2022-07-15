function largestOfFour(arr) {
    const limit = arr.length;
    let count = 0; 

    for (let i=0; i < limit; i++) {
        arr.push(Math.max(...arr[i])); /// ... operator : unpacking in JS
        count +=1; 
    }

    for (let j=0; j < count; j++) {
        arr.shift(); 
    }

    console.log(arr);
    return arr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);