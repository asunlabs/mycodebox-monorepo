const ADD_NOTE = 'ADD_NOTE';

// switch/case is a standard way of writing Reducder
const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE : 
        return action.text;
    // Change code above this line
    default:
      return state;
  }
};

// actionCreator returns an object
const addNoteText = (note) => {
  // Change code below this line
    return {
        type:ADD_NOTE, // action.type
        text:note // data come with the action
    }
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());