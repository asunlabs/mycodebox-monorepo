// Variable with question mark 
// The question mark in Javascript is commonly used 
// with the purpose of followings : 
// 1) shorthand of if~else command(conditional operator) 
// 2) optional chaining(conditional assignment)
// reference : https://www.robinwieruch.de/javascript-variable-question-mark/

const doorClosed = true;
const message = doorClosed ? "it is closed" : "it is not closed";
console.log(message) // "it is closed" 

// returns an undefind when a variable doesn't exist
const bowl = new Array();
const food = { drink : {coke:1, sprite:2}, bread:"baguette" }; 

const myDrink = food.drink?.whiskey; // searching whiskey propery in drink object 
console.log(myDrink); // undefined

