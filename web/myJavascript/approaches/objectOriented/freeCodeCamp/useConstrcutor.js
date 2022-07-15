// 'this' inside constructor awlays points to a newly created object
// Use 'new' operator to call the constructor. The new enables constructor 
// to point to a newly created object
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line

// new operator used to call Dog constructor
  const hound = new Dog()
