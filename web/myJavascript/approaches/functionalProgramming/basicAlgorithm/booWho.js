function booWho(bool) {
    if (bool === true || bool === false) {
        bool = true;
        console.log(bool);
        return bool;
    } else { 
        bool = false;
    }
    console.log(bool);
    return bool;
  }
  
  booWho(null); // test 1 
  booWho(true); // test 2 
  booWho(false); // test 3 
  booWho(NaN); // test 4 
  booWho("true"); // test 5 

  function simplerBooWho(bool) {
      return typeof(bool) === "boolean";  
  }

  console.log(simplerBooWho(true));

  // primitive data type in javascript : 
  // 1) number 
  // 2) string 
  // 3) boolean 
  // 4) null 
  // 5) undefined

