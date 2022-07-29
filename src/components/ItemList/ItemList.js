import React from "react";
import Items from "../Items/Items"
import {useState} from "react"

const ItemList=({itemData})=>{
    const [cart]=useState([]);
    const handleClick=(item)=>{
        cart.push(item)
        console.log(cart)
    }
    return(
        <>
        {itemData.map(item=>{return <Items key={item.id} item={item} handleClick={handleClick}/>})}
        </>
    )
}

export default ItemList;