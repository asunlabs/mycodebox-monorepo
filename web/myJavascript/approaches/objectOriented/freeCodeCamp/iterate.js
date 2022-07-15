function Dog(name) {
    this.name = name; // own property
  }
  
  Dog.prototype.numLegs = 4; // prototype property
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Only change code below this line
  for (let props in beagle) {
      if(beagle.hasOwnProperty(props)) {
          ownProps.push(props) // push if the props is own property
      } else { 
          prototypeProps.push(props) // push if the prop is prototype property
      }
  }