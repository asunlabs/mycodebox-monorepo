// # Regular expression
// Regular expression is a tool that finds a specific character in string. It is also a type of language that is used in most of programming languages.
// For example, Regular expression for an email address is as follows: 
// ^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$ 
// Refer [How to write regular expressions?](https://www.geeksforgeeks.org/write-regular-expressions/) to see more details. 

// Regular expression is divided into : 
// 1) compile(creating a pattern_test to find)
// 2) execute(finding the pattern_test in stirng)

// Create a pattern_test to find
const pattern_test = /a/;
const pattern_test_regExp = new RegExp('a'); // create a regular expression instance

console.log(`${pattern_test} is the same with ${pattern_test_regExp}`);

// Find a 'g' in 'www.google.com' using regular expression.
const pattern_g = new RegExp('g'); 
const pattern_g_dot= new RegExp('g.'); // dot in regular expression : includes any string
const pattern_g_all = new RegExp('g', 'g'); // second parameter is : global flag. Same with /g/g
const googleUrl = 'www.google.com'; 
const result = pattern_g.exec(googleUrl);

console.log(`your pattern is :  ${result}`);
console.log(typeof(result));
console.log(pattern_g_dot.exec(googleUrl)); 
console.log(pattern_g_dot.exec("hello"));

// pattern.test : print boolean if the pattern exists in searching string
console.log(pattern_g_dot.test(googleUrl)); 

// string.replace(pattern, new pattern to replace)
console.log(googleUrl.replace(pattern_g, 'not g')); // expected result : www.not google.com

// add global flag to find more two characters
console.log(pattern_g_all.exec(googleUrl)); 
console.log(googleUrl.match(pattern_g_all)); // string.match returns an array if reuslt has more than two elements

// capture in regular expression
// \w : matches a to z, A to Z, 0 to 9
// x+ : matches preceding x 1 or more times
// e.g a+ in candy : 'a', a+ in caaaaaandy : 'aaaaaa'
// thus, (\w+) means an word
// \s : white space
const paragraph = "learn javascript through google"; 
const pattern_oneWord_space = /(\w+)\s(\w+)\s(\w+)\s(\w+)/;
const result_oneWord = pattern_oneWord_space.exec(paragraph); 
const result_oneWord_replace = paragraph.replace(pattern_oneWord_space, '$4, $3, $2, $1');

console.log(result_oneWord);
console.log(result_oneWord_replace); 