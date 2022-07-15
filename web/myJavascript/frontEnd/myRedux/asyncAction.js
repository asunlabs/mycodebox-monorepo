import redux from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

// delcare an initial state
const initialState = {
    loading : true, 
    data : [], 
    errorMessage : ''
}

// define actions
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

// define action creators
const fetchUsersRequest = () => {
    return {
        type : FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = (users) => {
    return {
        type : FETCH_USERS_SUCCESS, 
        payload : users
    }
}
const fetchUsersFailure = (error) => {
    return {
        type : FETCH_USERS_FAILURE,
        payload : error
    }
}

// action creators for network request
const fetchUsers = () => {
    // return function thanks to thunk
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res)=>{
                const users = res.data.map((user)=>user.name)
                // console.log(users)
                // dispatch action creator for state when succeeded
                dispatch(fetchUsersSuccess(users))
            })
            .catch((err)=>{
                // dispatch action creator for state when failed
                dispatch(fetchUsersFailure(err.message))
            })
    }
}

// define a reducer to update state
const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST : 
            return {
                loading : true
            }
        case FETCH_USERS_SUCCESS : 
            return { 
                loading : false, 
                data : action.payload
            }
        case FETCH_USERS_FAILURE : 
            return { 
                loading : false, 
                errorMessage : action.payload
            }
    }
}

// thunk : allowing action creators to return function, not an object
const store = redux.createStore(reducer, redux.applyMiddleware(thunk.default))

const unsubscribe = store.subscribe(()=> console.log(store.getState()))

store.dispatch(fetchUsers())

// if unsubscribe invoked right away, the result won't show.
setTimeout(unsubscribe, 1000)