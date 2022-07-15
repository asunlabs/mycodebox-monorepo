// ... spread operator returns an unpacked array
// only works in-place, for example 
// const test = [...[1,2,3]] => correct
// const test = ...[1,2,3] => incorrect
const test = ()=>console.log([...[1,2,3]]) 



const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line


console.log(arr2);