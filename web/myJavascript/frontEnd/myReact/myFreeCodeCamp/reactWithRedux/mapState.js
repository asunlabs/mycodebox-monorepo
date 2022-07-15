// Provider component allows you to provide state and dispatch. 
// Clarify what state and action you need so that component only 
// approaches to the state it needs. 

const state = [];

// Change code below this line
function mapStateToProps(state) {
    return {
        messages : state
    }
}