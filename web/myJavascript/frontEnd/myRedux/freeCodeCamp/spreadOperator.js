// spread operator : ... 
// let newArray = [...myArray, myValue] : copying myArray and 
// returns/assigns a new array to newArray. And adds myValue to the array.
// Same with Python unpacking
// applicable to one dimensional array only

const immutableReducer = (state = ['Do not mutate state!'], action) => {
    switch(action.type) {
      case 'ADD_TO_DO':
        // Don't mutate state here or the tests will fail
        return [...state, action.todo]; 
      default:
        return state;
    }
  };
  
  const addToDo = (todo) => {
    return {
      type: 'ADD_TO_DO',
      todo
    }
  }
  
  const store = Redux.createStore(immutableReducer);