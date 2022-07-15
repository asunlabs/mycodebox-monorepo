// Array.join(sep)

function sentensify(str) {
    // Only change code below this line
    // regualr expression /\W/ : 
    // Matches any character that is not a word character 
    // from the basic Latin alphabet. e.g : % in 50% 
    
    const seps = /\W/; // regular expression 
    str = str
          .split(seps)
          .join(" "); // string to array
    console.log(str);
    return str;
  
    // Only change code above this line
  }
  
  sentensify("May-the-force-be-with-you");
  sentensify("The.force.is.strong.with.this.one");
  sentensify("There,has,been,an,awakening");



// trial 1 : map
// const separators = ["-", ".", ","]; 
//     let bowl_hyphen;
//     let bowl_dot;
//     let bowl_comma;

//     separators.map((sep)=>{
//         if (sep === "-") {
//             bowl_hyphen = str.split(sep);
//             bowl_hyphen = bowl_hyphen.join(" ");

//         } else if (sep === ".") { 
//             bowl_dot = str.split(sep);
//             bowl_dot = bowl_dot.join(" ");
//         } else { 
//             bowl_comma = str.split(sep);
//             bowl_comma = bowl_comma.join(" ");
//         }
//     })
//     // bowl = str.split("-");
//     console.log(bowl);