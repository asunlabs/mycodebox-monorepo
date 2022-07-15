// by using 'this' keyword, code becomes more reusable since 
// you don't need to update every variable that was based on 
// a certain method. In below case, 'this' can be used
// to remove any reference
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();