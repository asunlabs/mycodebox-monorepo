import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductList } from './products/productList'
import { ProductForm } from './products/productForm'
import { Provider } from 'react-redux';
import store from './store'
import { Cart } from './cart/cart';

function App() {
  return (
    // Makes the Redux store available to the connect() calls in the component hierarchy below.
    <Provider store={store}>
      <div className="App">
        <ProductList />
        <ProductForm />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
