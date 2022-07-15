let difficultSpelling = "Mississippi";
let myRegex = /s+|p+/ig; // Change this line
let result = difficultSpelling.match(myRegex);
console.log(result)