// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = "ADD"

function addMessage(message) { 
    return { 
        type: ADD, 
        message
    }
}

// Reducer takes state and action
// swtich~case is a standard way of writing Reducer in Redux
function messageReducer( state=[], action) { 
    switch (action.type) { 
        case ADD : 
            return { 
                
            }
    }
}