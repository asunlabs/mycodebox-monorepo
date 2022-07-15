let sampleWord = "astronaut55";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; 
let result = pwRegex.test(sampleWord);

console.log(sampleWord.match(pwRegex))

console.log(result)