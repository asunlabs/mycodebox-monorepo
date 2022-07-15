import * as React from 'react';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { addToCart } from '../cart/cart.slice';
import { useAppDispatch } from '../hooks/store.hooks';
import { RootState } from '../store';
import { getProductSelector, Product, removeProduct, selectAllProduct, selectProductById, selectProductEntities, selectProductIds } from './productSlice';

export function ProductList () {

    const product = useSelector(selectAllProduct)
    const minecraft = useSelector<RootState>(state => selectProductById(state, 'Minecraft'))
    const totalProducts = useSelector<RootState>(selectAllProduct)
    const productIds = useSelector(selectProductIds)
    const entities = useSelector(selectProductEntities)
    console.log("selectAllProduct ", product)
    console.log("selectProductById ", minecraft)
    console.log("selectAllProduct ", totalProducts)
    console.log("selectProductIds ", productIds)
    console.log("selectProductEntities ", entities)
    console.log("select Fornite in entities", entities['Fortnite'])

    const dispatch = useAppDispatch()
    const removeFromStore = (id : string) => {
      // Dispatches a synthetic event event to target
      dispatch(removeProduct(id))
    }

    const addToCartHandler = (product:Product) => {
      dispatch(addToCart(product))
    }

  return (
    <div>
        <h2>Game list available</h2>
        {product.map((game) => {
            return (
            <div key={v4()}>
              <span>{game.title} is {game.price} dollars.</span>
              <button onClick={()=>addToCartHandler(game)}>Add to cart</button>
              <button onClick={()=>removeFromStore(game.id)}>Remove from store</button>
            </div>)  })}
    </div>
  );
}
