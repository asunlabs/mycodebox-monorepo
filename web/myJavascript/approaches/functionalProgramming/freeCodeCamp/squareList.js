const squareList = arr => {
    // Only change code below this line

    const filtered_arr = arr.filter((number)=>{

        // Number.isInteger checks if a number has a decimal value.  
        if (number > 0 && Number.isInteger(number)) { 
            return number
        }
    });

    const mapped_arr = filtered_arr.map((number)=>{
        return Math.pow(number,2);
    });

    const result = mapped_arr; 
    console.log(result);

    return result;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);