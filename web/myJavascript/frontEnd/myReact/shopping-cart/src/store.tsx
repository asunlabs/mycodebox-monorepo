import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import product from './products/productSlice'
import cart from './cart/cart.slice'

// A friendly abstraction over the standard Redux createStore() function.
const store = configureStore({
    reducer : { 
        product, 
        cart
    }
})

// ReturnType : Obtain the return type of a function type
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store