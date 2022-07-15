function confirmEnding(str, target) {
    let bowl = new Array();
    let count = 0;

    bowl = str.split(" ");
    const bowl_last_word_reversed = bowl[bowl.length-1].split("").reverse(); 
    const target_reversed = target.split("").reverse(); 

    // console.log(target_reversed); 
    // console.log(bowl_last_word_reversed); 

    for (let key in target_reversed) {
        if (target_reversed[key] === bowl_last_word_reversed[key]) {
            count++; 
        }
        if (count === target_reversed.length) {
            // status = true; 
            str = true;
        } else { 
            str = false;
        }
    }

    console.log(str); 
    return str;
  }
  
  confirmEnding("Bastian", "n"); // test string 1
  confirmEnding("Open sesame", "sage"); // test string 2
  confirmEnding("Open sesame", "same"); // test string 3 
  confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"); // test string 4


  // Use built-in method endsWith to check if the target string is matched with the string
  function doEndWith(str, target) {
    if (str.endsWith(target)) {
        console.log(true);
    } else { 
        console.log(false);
        // return false;
    }
  }

  doEndWith("Bastian", "n");
  doEndWith("Open sesame", "sage");
  doEndWith("Open sesame", "same"); 
  doEndWith("Walking on water and developing software from a specification are easy if both are frozen", "specification");