import React from "react";
import {useState,useRef,useEffect} from "react";

const ItemCounter=({stockActual, item, setQuantitySelected})=>{
    const [counter, setCounter] = useState(1);
    const counterRef=useRef(null);
    const [cartItems, setCartItems] = useState([]);
    const [stock, setStock] = useState(stockActual);
    const [cart]=useState([]);
    const plusOne=()=>{
        if (counter < stock) 
        setCounter(count => count + 1)
        }
    const minusOne=()=> {
        if (counter > 0) {
            setCounter(count => count - 1)
      }}
      const itemCount=()=>{
        cartItems.push(counter);
      }
    const actualizarStock=()=>{
        setStock(stock-counter);
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

    return(
        <>
            <div className="ItemCounter">
                <button onClick={minusOne}>-</button>
                <p ref={counterRef}>{counter}</p>
                <button onClick={plusOne}>+</button>
            </div>
            <button className="BuyBtn" onClick={()=>{
                setQuantitySelected(counter);
                actualizarStock();
                }}>comprar</button>
            <p>stock actual: {stock}</p> 
            {console.log(counter)}
         </>
    )
}

export default ItemCounter;