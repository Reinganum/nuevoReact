import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Items from './components/Items/Items';
import './App.css';

function App() {
  return (
    //JSX
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"BIENVENIDO A TU CLUB DE CINE"}/>
    </div>
  );
}

export default App;
