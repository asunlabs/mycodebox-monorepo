const defaultState = {
  authenticated: false
};

// Using switch statement is a standard way of writing Redux reducer
const authReducer = (state = defaultState, action) => {
  // Change code below this line
  const currentState = state; 

  switch (action.type) { 
      case ('LOGIN') : 
          return {
            authenticated : true
          }; 
      case ('LOGOUT') : 
          return { 
            authenticated : false
          } ;
      default : 
          return currentState; 
  }
  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};