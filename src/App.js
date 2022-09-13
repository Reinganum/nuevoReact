import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Detail from './components/Detail/Detail';
import Checkout from './components/Checkout/Checkout';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import CartProvider from './context/CartContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    //JSX
  <CartProvider>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/products' element={<h1>Todos los productos</h1>}/>
          <Route path='/products/:itemCategory' element={<ItemListContainer/>}/>
          <Route path='/products/:category/:id' element={<Detail/>}/>
          <Route path='/cart' element={<Checkout />}/>
          <Route path='products/:search' element={<ItemListContainer />}/>
        </Routes>
      </div>
    </BrowserRouter>
  </CartProvider>
  );
}

export default App;
