// Types of object's property
// 1) own property : properties inside constrcutor
// 2) prototype : properties outside constructor 
// 3) constructor : a reference to a constructor function

function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  function joinDogFraternity(candidate) {
    if (candidate.constructor===Dog) {
        return true
    } else { 
        return 0
    }
  }