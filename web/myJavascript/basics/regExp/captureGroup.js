let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/g;
let result = reRegex.test(repeatNum);
console.log(repeatNum.match(reRegex))
console.log("42 42 42 42".match(reRegex))