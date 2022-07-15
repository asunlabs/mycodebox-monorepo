function repeatStringNumTimes(str, num) {
    let bowl = new Array(); 

    if (num < 0) {
        return ""; 
    }

    for (let i=0; i < num; i++) {
        bowl.push(str); 
    }

    str = bowl.join(""); 
    console.log(str); 

    return str;
  }
  
  repeatStringNumTimes("abc", 3); // test 1
  repeatStringNumTimes("*", 8); // test 2
  repeatStringNumTimes("abc", -2); // test 3
  repeatStringNumTimes("abc", 0); // test 4
  repeatStringNumTimes("abc", 4); // test 5


  // Use built-in repeat method
  function doRepeat(str, num) {
    console.log(str.repeat(num));
  }

  doRepeat("abc", 3);
  doRepeat("*", 8);
//   doRepeat("abc", -2);
//   doRepeat("abc", 0);
  doRepeat("abc", 4);