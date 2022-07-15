const ADD = "ADD"

function addMessage(message) {
    return {
        type: ADD, 
        message
    }
}

function messageReducer(state=[], action) { 
    switch (action.type) { 
        case (ADD) :
            return [...state, action.message]
        default :
            return state
    }
}

const store = Redux.createStore(messageReducer)