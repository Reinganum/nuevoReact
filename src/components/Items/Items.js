import React from "react";
import '../Items/Items'
import '../ItemCount/ItemCount'
import ItemCounter from "../ItemCount/ItemCount"
import {Link} from 'react-router-dom'

const Items = ({item, handleClick}) =>{ 
    const {image,title,price,stock,id} = item;
    const getId = event => {
        console.log(event.currentTarget.id);
    }
    return(
        <div className="productCard">
            <Link to={`/products/${id}`}>
            <img src={`/assets/${image}`} alt="" id={id} onClick={getId}/>
            </Link>
            <p>{title}</p>
            <p id="">${price}</p>     
            <ItemCounter stockActual={stock} item={item} handleClick={handleClick}/>  
        </div>
    )
}

export default Items;