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
          <Route path='/' element={<ItemListContainer greeting={"BIENVENIDO A TU CLUB DE CINE"}/>}/>
          <Route path='/products' element={<h1>Productos</h1>}/>
          <Route path='/products/:id' element={<Detail />}/>
          <Route path='/contact' element={<h1>Contacto</h1>}/>
          <Route path='/aboutUs' element={<h1>Nosotros</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
