
let foo = "foo"
console.log(foo) // result : foo

foo.toUpperCase()
console.log(foo) // result : foo

let a = 10 
let b = a // 10
b = b + 1 // 11
console.log(a) // call by value. A value of a is 10. 

c = [1,2] // call by reference. A value of c is an address such as : <0x01>
d = c
d.push(3) 
console.log(c) // [1,2,3]. call by reference. A value of c,d is the same address : <0x01> 

// call by reference
const first = [1] // point to memory <0x11>
const second = [1] // point to memory <ox12>
console.log(first === second) // false
console.log(first == second) // false

// call by value
const left = 10 
const right = 10 
console.log(left === right) // they have the same values 
console.log(left == right)

// call by reference in function
const addOneMore = (array, elem) => { 
    array.push(elem)
}
let myArr = [1,2]
addOneMore(myArr, 999)
console.log(myArr) // result : [1,2,999]