function mutation(arr) {
  let bolt = new Array(); 
  let nut = new Array(); 
  let count = 0; 

  const first = arr[0].toLowerCase();
  const second = arr[1].toLowerCase();

  bolt = first.split("").sort();
  nut = second.split("").sort();

  // filter method creates a new array with only elements passed callback function.
  // Array.filter((element, index, array))
  // Removing duplicates : Array.indexOf(elem) === index
  bolt.filter( (char, index)=> {
    for (let key in nut) {
      if (char === nut[key] && bolt.indexOf(char)===index) {
        count++;
      }
    }
  });

  if (count >= second.length) {
    console.log(true); 
    return true;
  } else {
    console.log(false); 
    return false;
  }
  
}
  
  mutation(["hello", "hey"]); // test 1
  mutation(["hello", "Hello"]); // test 2
  mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // test 3
  mutation(["Mary", "Army"]); // test 4
  mutation(["Mary", "Aarmy"]); // test 5
  mutation(["voodoo", "no"]); // test 6


// trial 
//   let first = arr[0]; 
//   let second = arr[1];
//   // let status = false; 
//   let count = 0;

//   first = first.split("").sort();
//   second = second.split("").sort(); 
//   console.log(first); 
//   console.log(second); 

//   for (let key in second) {
//       for (let i=0; i<first.length; i++) {
//           if (second[key] === first[i]) {
//               count++;
//           }
//       } 
//   }

//   if (count >= second.length) { 
//       console.log(count);
//       console.log(true);
//   } 

//   return false;