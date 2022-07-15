import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store'

// useDispatch : A hook to access the redux dispatch function. 
// Returns — redux store's dispatch function
export const useAppDispatch = () => useDispatch<AppDispatch>()

// useSelector : A hook to access the redux store's state. 
// This hook takes a selector function as an argument. 
// The selector is called with the store state.
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector