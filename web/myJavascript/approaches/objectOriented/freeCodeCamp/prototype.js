// Avoid directly assign a certain value to a constructor
// Use prototype to make a property shared in all instance of a constructor.
function Dog(name) {
    this.name = name;
  }

  Dog.prototype.numLegs = 4
  
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");
  
console.log( beagle instanceof Dog )

  if (beagle.hasOwnProperty("name")) {
      console.log("it has name as own property")
  }