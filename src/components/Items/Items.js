import React from "react";
import '../Items/Items'

const Items = ({image,title,price}) =>{
    return(
        <div className="productCard">
            <img src={`/assets/${image}`} alt=""/>
            <p>{title}</p>
            <p>${price}</p>
            <button className="BuyBtn">comprar</button>
        </div>
    )
}

export default Items;