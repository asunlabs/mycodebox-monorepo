import redux from 'redux'
import logger from 'redux-logger'

// Define an action
const BUY_CAKE = 'BUY_CAKE'
const REFUND_CAKE = 'REFUND_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
const REFUND_ICECREAM = 'REFUND_ICECREAM'

// Define an action creator for cake
function buyCake() {
    return {
        type : BUY_CAKE, 
        madeBy : "Jake"
    }
}

function refundCake() {
    return {
        type : REFUND_CAKE, 
        cause : 'Simple remorse',
        consumed : false
    }
}

// Define an action creator for ice cream
function buyIceCream() {
    return {
        type : BUY_ICECREAM, 
        madeBy : "Jake"
    }
}

function refundIceCream() {
    return {
        type : REFUND_ICECREAM, 
        cause : 'Simple remorse',
        consumed : false
    }
}

// Define an initial state for cake
const initialCakeState = {
    numberOfCakes : 10, 
}

// Define an initial state for ice cream
const initialIceCreamState = {
    numberOfIceCreams : 10, 
    refund : false
}

// Define a cake reducer 
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE : 
        // Create a copied state object first
        // and then only changes properties needed to change.
            return {
                ...state,
                numberOfCakes : state.numberOfCakes -1
            }
        case REFUND_CAKE : 
            if (state.numberOfCakes < 10) {
                return {
                    ...state,
                    numberOfCakes : state.numberOfCakes +1
                }
            }
        default : return state
    }
}

// Define an iceCreamReducer
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM : 
            return {
                ...state,
                numberOfIceCreams : state.numberOfIceCreams -1
            }
        case REFUND_ICECREAM : 
            if (state.numberOfIceCreams < 10) {
                return {
                    ...state,
                    numberOfIceCreams : state.numberOfIceCreams +1,
                    refund : true
                }
            }
        default : return state
    }
}

// create a root reducer
const rootReducer = redux.combineReducers({
    cake : cakeReducer, 
    iceCream : iceCreamReducer
})

// create a middleware
const middlewares = redux.applyMiddleware(logger.createLogger())

// create a redux store
const store = redux.createStore(rootReducer, middlewares)
console.log("initial state : ", store.getState())

// store.subscribe calls a listener function that gets triggered every time the store is updated 
const unsubscribe = store.subscribe(()=> console.log(store.getState()))
// To unsubscribe the change listener, invoke the function returned by subscribe.
unsubscribe()

// dispatch actions to update store
store.dispatch(buyCake()) 
store.dispatch(refundCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(refundCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(refundCake())
store.dispatch(refundIceCream())