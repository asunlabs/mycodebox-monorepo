// object has a speical type of property called method
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs(){
        return `This dog has ${dog.numLegs} legs.`
    }
  };
  
  dog.sayLegs();