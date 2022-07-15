// object inherits prototype ====> also inherits supertype's constructor
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype); // Bird inherits supertype's constructor as well
Dog.prototype = Object.create(Animal.prototype); // Dog inherits supertype's constructor as well

// Only change code below this line
Bird.prototype.constructor = Bird
Dog.prototype.constructor = Dog

let duck = new Bird();
let beagle = new Dog();