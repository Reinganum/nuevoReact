import React from "react";
import {useState} from "react";
import '../Items/Items'
import '../ItemCount/ItemCount'
import ItemCounter from "../ItemCount/ItemCount";

const Items = ({item, handleClick}) =>{ 
    const {image,title,price,stock} = item;
    return(
        <div className="productCard">
            <img src={`/assets/${image}`} alt=""/>
            <p>{title}</p>
            <p id="">${price}</p>     
            <ItemCounter/>  
            <p>stock actual:{stock}</p> 
            <button className="BuyBtn" onClick={()=>handleClick(item)}>comprar</button>
        </div>
    )
}

export default Items;