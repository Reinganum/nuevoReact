import React from "react";
import {useState,useRef,useEffect,useContext} from "react";
import { CartContext } from "../../context/CartContext";
import {useParams} from 'react-router-dom';

const ItemCounter=({stockActual, itemData,setQuantitySelected})=>{
    const {addItemToCart,counter,setCounter, setItemQuantity}=useContext(CartContext)
    const counterRef=useRef(null);
    const {itemId}=useParams();
    const [stock, setStock] = useState(stockActual);
    const plusOne=()=>{
        if (counter < stock) 
        setCounter(count => count + 1)
        }
    const minusOne=()=> {
        if (counter > 0) {
            setCounter(count => count - 1)
      }}
    const actualizarStock=()=>{
        setStock(stock-counter);
    }
    const onAdd=()=>{
        const itemToAdd = {...itemData, counter: counter}
        addItemToCart(itemToAdd)
        setQuantitySelected(counter)
    }
    useEffect(()=>{
        if (stock < 1){
            setCounter("Stock Agotado");
        } else if (counter > stock) {
            setCounter(stock);
        }
    },[stock])
    
    useEffect(()=>{
        setStock(stockActual)
    },[stockActual])

    useEffect(()=>{
        setCounter(1)
    },[itemId])

    return(
        <>
            <div className="ItemCounter">
                <button className="counterBtn" onClick={minusOne}>-</button>
                <p className="counterNum" ref={counterRef}>{counter}</p>
                <button className="counterBtn" onClick={plusOne}>+</button>
            </div>
            <button className="BuyBtn" onClick={()=>{
                actualizarStock();
                onAdd();
                }}>comprar</button>
            <p>stock actual: {stock}</p> 
         </>
    )
}

export default ItemCounter;