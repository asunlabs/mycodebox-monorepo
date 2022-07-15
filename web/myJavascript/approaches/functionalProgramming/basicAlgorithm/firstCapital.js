function titleCase(str) {
  let bowl = [];
  
  const newArr = str.toLowerCase().split(" ");
  const result = newArr.map((val)=>{
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });

  console.log(result.join(" ")); 
  return result.join(" ");

  }
  
  titleCase("I'm a little tea pot");


  // trial 1 
// logic 
  // let test = "text".split("");
  // test[0] = test[0].toUpperCase();
  // test = test.join("")
  // console.log(test); 


  // let bowl = new Array();
  // str = str.toLowerCase().split(" ");
  // console.log(str);
  
  // let result = str.map((val)=> {
  //   val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  // })

  // result = result.join(" ");
  
  // console.log(result);
  // return str;

  // trial 2
    // bowl = bowl.join("");

  //  for (let i=0; i<bowl.length; i+=2) {
  //   bowl = bowl.join(",");
  //  }
  // for (let i=0; i<bowl.length; i+=2) {
  //   // bowl[i] = bowl[i] + bowl[i+1];
  // }
  
  // for (let i=1; i<bowl.length; i+=2) {
  //   bowl.slice(i,1);
  // }

