function findLongestWordLength(str) {
    const test = str.split(" ");
    const indexArr = new Array(); 

    for (let key in test) {
        indexArr.push(test[key].length);
    }

    console.log(indexArr);

    // ... operator extracts data from arrays/objects into
    // distinct variables. Simliar to python unpacking. 
    const index = Math.max(...indexArr);
    
    for (let key in test) {
        if (index === test[key].length) {
            str = test[key];
        }
    }

    console.log(str); 
    console.log(str.length); 

    return str.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  findLongestWordLength("Nothing is impossible in this world");