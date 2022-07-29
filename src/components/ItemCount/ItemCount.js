import React from "react";
import {useState,useRef} from "react";
import { arrProducts } from "../Products/Products";

const itemesTotales=[];

const ItemCounter=()=>{
    const [counter, setCounter] = useState(1);
    const counterRef=useRef(null);
    const [stock, setStock]=useState(arrProducts.stock);
    const [cartItems, setCartItems] = useState([]);
    const plusOne=()=>setCounter(count => count + 1)
    const minusOne=()=> {
        if (counter > 0) {
            setCounter(count => count - 1)
      }}
      const itemCount=()=>{
        cartItems.push(counter);
      }
    return(
        <>
            <div className="ItemCounter">
                <button onClick={minusOne}>-</button>
                <p ref={counterRef}>{counter}</p>
                <button onClick={plusOne}>+</button>
            </div>
         </>
    )
}

export default ItemCounter;