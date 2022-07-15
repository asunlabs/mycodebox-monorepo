import * as React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { addProduct, addProductAsync, getErrorMessage, Product } from './productSlice';

// state in form recommended to be local, not in Redux store.
export function ProductForm () {

  const dispatch = useAppDispatch()
  const errorMessage = useSelector(getErrorMessage)
  const [product, setProduct] = React.useState<Product>({
    id : '',
    title : '',
    price : 0 
  })

  // when single HTMLInputElement state changes => event : React.ChangeEvent<HTMLInputElement>
  // when multiple HTMLInputElement => { target : { name, value }} : React.ChangeEvent<HTMLInputElement>
  const handleChange = ( { target : { name, value }} : React.ChangeEvent<HTMLInputElement> ) => {

    // setProduct takes an argument, which is a previous state(Product)
    setProduct( prev => { 
      
      // Object[input name] = input value
      (prev as any)[name] = value
      const newValue = { ...prev }
      return newValue
    })
  }

  const handleSubmit = (event : React.FormEvent) => {
    event.preventDefault() // prevent that input values are displayed in URL
    console.log( product.id, product.title, product.price )

    // fetching data asynchronously
    dispatch(addProductAsync(product))

    // reset form inputs 
    setProduct( prev => ({
      title : '',
      id : '', 
      price : 0
    }))
  }

  return (
    <div>
      <h2>Add Game To Store</h2>
      {errorMessage && <span>error : {errorMessage}</span>}
      <form onSubmit={handleSubmit}>
        {/* input name and value are used above useState(setState) */}
        <input 
          style={ {border : errorMessage ? '1px solid red' : '1px solid black'}}
          type="text" 
          name="title" 
          id="title" 
          placeholder='title' 
          value={product.title} 
          onChange={handleChange} />
        <input
          style={ {border : errorMessage ? '1px solid red' : '1px solid black'}} 
          type="text" name="price" id="price" placeholder='price' value={product.price} onChange={handleChange} />
        <input
          style={ {border : errorMessage ? '1px solid red' : '1px solid black'}} 
          type="text" name="id" id="id" placeholder='id' value={product.id} onChange={handleChange} />
        <button type='submit'>Add price</button>
      </form>
    </div>
  );
}
