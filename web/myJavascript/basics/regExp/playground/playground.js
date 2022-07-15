const sentence = "There is a cute cat"
const regExp = /cat$/
console.log(regExp.test(sentence)) // true

let reCriminals = /C+/g; 
const criminalList = [
    "C", 
    "CC",
    "P1P5P4CCCcP2P6P3",
    "P6P2P7P4P5CCCCCP3P1",
    "",
    "P1P2P3",
    "P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3",
]

const regExpResult = []

for (key in criminalList) {
    regExpResult.push(criminalList[key].match(reCriminals))
}

console.log(regExpResult)

const happy = "Jake is happy"
const happyRegExp = /^Jake/
console.log(happyRegExp.test(happy)) // true

const notHappy = "not happy Jake is"
console.log(happyRegExp.test(notHappy)) // false

const alphabet = /\w+$/ // shorthand for /[A-Za-z0-9_]+/
const alphabetSentence = "Pat the cute cat"
console.log(alphabetSentence.match(alphabet))

const notAlphabet = /\W+/g
const notAlphabetSentence = "Feed the cute cat!!"
console.log(notAlphabetSentence.match(notAlphabet))

const findDigit = /\d/g // equal to /[0-9]/g
const digitSentence = "New year 2022 has come"
console.log(digitSentence.match(findDigit)) // ['2','0','2','2']

const findNonDigit = /\D/g
const findNonDigit2 = /[^0-9]/g
const nonDigitSentence = "Feb 2022"
console.log(nonDigitSentence.match(findNonDigit))
console.log(nonDigitSentence.match(findNonDigit2))

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d+\d+$/i;
let result = userCheck.test(username);
console.log(username.match(userCheck))
console.log(result)


const whiteSpace = "Find blank here"
const whiteSpaceRegExp = /\s/g
console.log(whiteSpace.match(whiteSpaceRegExp))

const quantitySentence = "gooooooal" 
const quantityRegExp = /o{1,3}a/g
console.log(quantitySentence.match(quantityRegExp))

const mixedGroupSentence = "cute cat"
const mixedRegExp = /ca(t|p)/
console.log(mixedRegExp.test(mixedGroupSentence))

console.log("42 42 42".match(/^(\d+) \1 \1$/))