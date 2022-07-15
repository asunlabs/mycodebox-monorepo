// Animal.prototype 
// Dog.prototype(an instance of supertype Animal constructor)
// beagle(an instance of supertype Dog constructor)

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype)

let beagle = new Dog();