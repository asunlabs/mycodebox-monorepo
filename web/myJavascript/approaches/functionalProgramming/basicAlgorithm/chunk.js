function chunkArrayInGroups(arr, size) {
    let bowl = new Array();

    for (let i=0; i<arr.length; i+=size) {
        bowl.push(arr.slice(i, i+size));
    }
    console.log(bowl); 
    return arr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2); // test 1
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); // test 2
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // test 3
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // test 4
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); // test 5


// trial
//   let bolt = new Array();
//   let nut = new Array();

//   for (let i=0; i<size; i++) {
//       bolt.push(arr[i]);
//   }

//   arr.filter((elem,index)=>{
//       for (let key in bolt) { 
//           if (elem === bolt[key]) {
//               arr.splice(index, size); 
//           }
//       }
//   });
  
//   console.log(bolt); 
//   console.log(arr); 

//   nut.push(bolt);
//   nut.push(arr);
//   console.log(nut);