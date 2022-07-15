// mapDispatchToProps : provide a specific action creator to dispatch 
// action against Redux store

const addMessage = (message) => {
    return {
      type: 'ADD',
      message: message
    }
  };
  
  // Change code below this line
function mapDispatchToProps(dispatch) {
    return {
        submitNewMessage : function(message) {
            dispatch(addMessage(message))
        }
    }
}