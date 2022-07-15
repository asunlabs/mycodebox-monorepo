// class in Javascript simply replaces constructor creation. 
// not a full-fledged class-based implementation of 
// an object-oriented paradigm, unlike in languages such as 
// Java, Python, Ruby, etc.

// the constructor is invoked when 'new' keyword is called
// to create a new object
// The constructor method is a special method for 
// creating and initializing an object created with a class. 

// Only change code below this line
class Vegetable {
    constructor(name){
        this.name = name
    }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'