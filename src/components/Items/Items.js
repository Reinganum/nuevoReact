import React from "react";
import '../Items/Items'
import '../ItemCount/ItemCount'
import ItemCounter from "../ItemCount/ItemCount"
import {Link} from 'react-router-dom'

const Items = ({item, handleClick}) =>{ 
    const {image,title,price,stock,id,category} = item;
    const getId = event => {
        console.log(event.currentTarget.id);
    }
    
    return(
        <div className="productCard">
            <Link to={`/products/${category}/${id}`}>
                <img src={`/assets/${image}`} alt="" id={id} onClick={getId} className="cardImage"/>
            </Link>
            <p>{title}</p>
            <p id="">${price}</p>     
        </div>
    )
}

export default Items;