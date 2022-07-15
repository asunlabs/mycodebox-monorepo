function getIndexToIns(arr, num) {
    arr.push(num); 
    arr.sort((a,b)=>a-b); // negative : ascending

    console.log(arr); 
    num = arr.indexOf(num); 
    console.log(num);
    return num;
  }
  
  getIndexToIns([40, 60], 50); // test 1
  getIndexToIns([10, 20, 30, 40, 50], 35); // test 2
  getIndexToIns([3, 10, 5], 3); // test 3
  getIndexToIns([2, 20, 10], 19); // test 4