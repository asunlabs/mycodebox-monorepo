let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/g; // Change this line
let result = twinkleStar.match(starRegex); // Change this line


const multipleMatch = /time/ig // multiple flags
const paragraphs = "Time is running. Your time, my time, both."
const result2 = paragraphs.match(multipleMatch) // multiple mathes
console.log(result2)