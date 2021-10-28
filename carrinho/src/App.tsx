import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { CartContext, useCart } from './provider/Cart';
import { ProductContext } from './provider/Products';
import ProductList from './components/ProductsList';
import CartList from './components/CartList';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const { products } = useContext(ProductContext)
  return (
    <div className="App">
        <ProductList/>
        <CartList/>
    </div>
  );
}

export default App;
