import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/store.hooks';
import { getCartProducts, getTotalPrice, removeFromCart } from './cart.slice';

export interface ICartProps {
}

export function Cart (props: ICartProps) {

  const cartProducts = useAppSelector(getCartProducts)
  const totalPrice = useAppSelector(getTotalPrice)
  const dispatch = useAppDispatch()

  const handleRemoveFromCart = (productId : string) =>{
    dispatch(removeFromCart(productId))
  }
  return (
    <>
      <h2>Cart</h2>
      <h5>total price : {totalPrice}</h5>
      {cartProducts.map((product)=> {
      return (
      <div key={product.id}>
        <span>added game : {product.title}</span><br />
        <span>amount : {product.amount}</span><br />
        <button onClick={()=>handleRemoveFromCart(product.id)}>Remove from cart</button>
      </div>)
      })
      }
    </>
  );
}
