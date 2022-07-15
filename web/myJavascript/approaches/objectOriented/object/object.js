// Object is the most basic form of object, which is a unit for saving data.
// Object : all object's parent/prototype
// below, now all objects created will have testing method. 
Object.prototype.testing = function(){console.log("hello object")}; 

function forTest3(name) {
    this.name = name;
    console.log("belong to only object3", this.name); 
}

const objectTest = new Object();
const objectTest2 = {};
const objectTest3 = new forTest3("forTest3(name)");
const objectTest4 = new forTest3("this is not test3"); 

forTest3.prototype.hello = function hello(){
    console.log("hello");
}

objectTest3.hello(); 
objectTest4.testing();
objectTest4; 


// console.log(objectTest3.testing());
// console.log(objectTest.testing());
// console.log(objectTest2.testing());
