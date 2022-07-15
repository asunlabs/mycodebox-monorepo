// prototype : the original look of object. javascript's object oriented programming essential
// prototype is a property. 
// constructor : (new)(function)

// prototype chain example : top, middle, bottom, basement
// in prototype chain, javascript searches a matched property object by object
// for example : 
// 1) check if basement object has sayHi fuction  
// 2) check if Bottom object has sayHi fuction  
// 3) check if Middle object has sayHi fuction  
// 4) check if Top object has sayHi fuction 
// stops when finds the matched property. 

function Top() {}
Top.prototype.sayHi = ()=>{console.log("say Hi function from Top")};

function Middle(){}
Middle.prototype = new Top(); // Middle => Top

function Bottom(){}
Bottom.prototype = new Middle(); // Bottom => Middle 
Bottom.prototype.sayHi = ()=>{console.log("say Hi function from Bottom")};

const basement = new Bottom(); // basement => Bottom
basement.sayHi(); // result : from Bottom

console.log(Top.prototype); // result : {sayHi: [function]}

// do : Bottom.prototype = new Middle(); 
// don't : Bottom.protype = Middle.prototype;  