
function Bird() {
    let weight = 15; // private variable
  
    this.getWeight = () => {
        return weight // closure in constructor function
    }
  }