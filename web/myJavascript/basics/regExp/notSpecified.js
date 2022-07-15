let quoteSample = "3 blind mice.";
let myRegex = /[^0-9^a^e^i^o^u]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line0
console.log(result)