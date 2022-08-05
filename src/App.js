import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Detail from './components/Detail/Detail';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    //JSX
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/products' element={<h1>Todos los productos</h1>}/>
          <Route path='/products/:itemCategory' element={<ItemListContainer/>}/>
          <Route path='/products/:category/:id' element={<Detail />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
