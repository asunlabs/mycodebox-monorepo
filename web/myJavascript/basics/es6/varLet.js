// var : declared globally or locally if declared inside a function 
// let : var + scope is limited to the its context

function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

// Create different variables when creating a function. 
// Above code done for learning purpose