import { createAsyncThunk, createSlice, PayloadAction, createEntityAdapter } from '@reduxjs/toolkit'
import { v4 } from 'uuid'
import validateProduct from '../fake.api'
import { RootState } from '../store'

// Product setting
export interface Product {
    title : string
    price : number
    id : string
} 

export const initialProduct : Product[] = [
    { title : "Fortnite", price : 1, id : 'Fortnite' },
    { title : "Overwatch", price : 3, id : 'Overwatch' },
    { title : "Minecraft", price : 222, id : 'Minecraft' },
]

// fake api validation setting : enum classifies validation state by number
export enum ValidationState {
    Fulfilled, // 0
    Pending, // 1
    Rejected // 2
}

// reducer(createSlice) setting
interface ProductSliceState {
    validationState? : ValidationState
    errorMessage? : string
}

// Use createEntityAdpater for data CRUD operations.
const productAdapter = createEntityAdapter<Product>()
const initialState = productAdapter.getInitialState<ProductSliceState>({
    errorMessage : undefined, 
    validationState : undefined
})

const filledInitialState = productAdapter.upsertMany(initialState, initialProduct)

// async request setting with the fake api
export const addProductAsync = createAsyncThunk('products/addNewProduct', async (initialProduct : Product)=>{
    const validatedProduct = await validateProduct(initialProduct)
    return validatedProduct
})

// createSlice : slice name, initial state, reducer's' object, extraReducer(for async request)
const productSlice = createSlice({
    name: 'products',
    initialState  : filledInitialState, 
    reducers : {
        addProduct : (state, action: PayloadAction<Product>) => {
            // way 1 : using createEntityAdapter(database-CRUD-like-approach in Redux)
            productAdapter.upsertOne(state, action.payload)

            // way 2 : traditional state update with a new state
            // return [action.payload, ...state]

            // way 3 : immutable.js are being developed for simpler state management
            // state.product.push(action.payload)
        }, 
        removeProduct : (state, action: PayloadAction<string>) =>{
            // way 1
            productAdapter.removeOne(state, action.payload)

            // way 2
            // ...state, 
            // product : state.product.filter(product => product.id !== action.payload)
        }, 
    }, 
    extraReducers : builder => {
        builder.addCase(addProductAsync.fulfilled, (state, action) => {
            productAdapter.upsertOne(state, action.payload) // update state
            state.validationState = ValidationState.Fulfilled
            state.errorMessage = undefined
        })
        builder.addCase(addProductAsync.rejected, (state, action)=>({
            ...state, 
            validationState : ValidationState.Rejected, 
            errorMessage : action.error.message
        }))
        builder.addCase(addProductAsync.pending, (state, action)=>({
            ...state, 
            validationState : ValidationState.Pending, 
            errorMessage : undefined
        }))
    }
})

export const { addProduct, removeProduct } = productSlice.actions
export const getProductSelector = ( state: RootState ) => state.product.entities
export const getErrorMessage = ( state : RootState ) => state.product.errorMessage

export const {
    selectAll : selectAllProduct, 
    selectById : selectProductById,
    selectEntities : selectProductEntities,
    selectIds : selectProductIds, 
    selectTotal : selectTotalProduct 

    // connect create.EntityAdapter with Root state so that it can know context
} = productAdapter.getSelectors<RootState>(state => state.product)

export default productSlice.reducer
