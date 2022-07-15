// propeties defined in an instance through constructor called own property
function Bird(name) {
    this.name = name; // this.name : first own property
    this.numLegs = 2; // this.numLegs : second own property
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line

// Object.hasOwnProperty : A property name.
// Determines whether an object has a property with the specified name.
  for (let prop in canary) { 
      if(canary.hasOwnProperty(prop)) { 
          ownProps.push((prop))
      }
  }