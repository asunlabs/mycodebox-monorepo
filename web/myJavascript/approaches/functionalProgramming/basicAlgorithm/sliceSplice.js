function frankenSplice(arr1, arr2, n) {

    const firstArr = arr1.slice().reverse();
    const secondArr = arr2.slice();

    for (let key in firstArr) {
        secondArr.splice(n,0,firstArr[key]);
    }

    console.log(secondArr); 
    return secondArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1); // test 1
  frankenSplice([1, 2], ["a", "b"], 1); // test 2
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2); // test 3
  frankenSplice([1, 2, 3, 4], [], 0); // test 4
