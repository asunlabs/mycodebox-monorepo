import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../products/productSlice' 
import { RootState } from '../store'

interface CartProduct extends Product {
    amount : number
}

// createSlice creates your actions as well as your reducer
const cartSlice = createSlice({
    // The slice's name. Used to namespace the generated action types.
    name: 'cart',
    // The initial state that should be used when the reducer is called the first time.
    initialState : [] as CartProduct[], 
    reducers: {
        addToCart : (state, action : PayloadAction<Product>) => {
            // Array.findIndex : returns the index of the first element in the array that satisfies the provided testing function.
            // Otherwise, it returns -1, indicating that no element passed the test.
            const productIdx = state.findIndex((product)=>product.id === action.payload.id)
            if (productIdx !== -1) {
                state[productIdx].amount += 1
            } else {
                state.push({...action.payload, amount :1})
            }
        }, 
        removeFromCart : (state, action : PayloadAction<string>) => {
            const productIdx = state.findIndex((product)=>product.id === action.payload)
            if (state[productIdx].amount > 1) {
                state[productIdx].amount -= 1
            } else {
                return state.filter(product => product.id !== action.payload)
            }
        }
    }
})


// Action creators for the types of actions that are handled by the slice reducer.
export const { addToCart, removeFromCart } = cartSlice.actions
export const getCartProducts = (state : RootState) => state.cart

// reduce calls the callback, as a function, once for each element 
// after the first element present in the array, in ascending order
// Array.reduce(cb, initial value)
export const getTotalPrice = (state : RootState) => state.cart.reduce((prev, current)=> prev += (current.amount * current.price), 0) // prev becomes a total value
export default cartSlice.reducer