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
const regExp = /^Jake/
console.log(regExp.test(happy)) // true

const notHappy = "not happy Jake is"
console.log(regExp.test(notHappy)) // false