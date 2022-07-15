const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} } // actionCreator
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} } // actionCreator

// actionCreator 
const handleAsync = () => {
  // below codes for asynchronous requests
  return function(dispatch) {
    // Dispatch request action here
    dispatch(requestingData()) // pass the action to dispatch method and then middleware would deal with the rest
    setTimeout(function() { // this part is a simulated API call
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here
      dispatch(receivedData(data))
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default) // second parameter of Redux.createStore
);