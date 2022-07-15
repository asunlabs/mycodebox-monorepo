// Object.assign(target, source) : mapping source object properties and copies to
// target object. Any matching properties will be overwritten by source object

const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
  };
  
  const immutableReducer = (state = defaultState, action) => {
    switch(action.type) {
      case 'ONLINE':
        // Don't mutate state here or the tests will fail
        return Object.assign({}, { 
            user: 'CamperBot',
            status: 'online',
            friends: '732,982',
            community: 'freeCodeCamp'
        }); 
      default:
        return state;
    }
  };
  
  const wakeUp = () => {
    return {
      type: 'ONLINE'
    }
  };
  
  const store = Redux.createStore(immutableReducer);