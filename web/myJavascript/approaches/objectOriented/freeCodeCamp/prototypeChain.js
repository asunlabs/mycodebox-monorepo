// instance : a subtype of constructor,
// constructor : a supertype of the instance. a subtype of Object
// Object : a supertype of all Javascript object. 

function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  // yields true
  
  // Fix the code below so that it evaluates to true
  console.log(Object.prototype.isPrototypeOf(Dog.prototype));