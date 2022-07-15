// In javascript, function is an object, meaning it can be delivered and saved.

// function in Javascript
function helloJavascript() { 
    console.log("hello");
}

// method in Javascript === function in object
const myObect = {
    1:function() {
        console.log("I am method"); 
    }
}

// Just like Python and Go, Javascript function is a first-class object
// can be used as a variable, return value, parameter. 
// example 1 
const door = {
    "open":function(){
        return "door opened"; 
    }(), 
    "close":function(){
        return "door closed"; 
    }()
}; 

console.log(`Open the door : ${door.open}`);
console.log(`Close the door : ${door.close}`); 

// example 2
const plus = function(a,b) {return a+b}; 
const minus = function(a,b) {return a-b}; 
console.log(plus(1,2)); 

let calculator = [plus, minus];  

console.log(calculator[0](1,44)); 