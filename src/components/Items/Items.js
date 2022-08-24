import React from "react";
import '../Items/Items'
import '../ItemCount/ItemCount'
import ItemCounter from "../ItemCount/ItemCount"
import {Link} from 'react-router-dom'

const Items = ({item, handleClick}) =>{ 
    const {image,title,price,stock,id,category,promotion} = item;
    const getId = event => {
        console.log(event.currentTarget.id);
    }
    
    return(
        <>
            <div className="productCard">
                {promotion > 0 && (<div className="discount">
                    <h4>-{promotion}%</h4>
                </div>
                )}
                <Link to={`/products/${category}/${id}`}>
                    <img src={`/assets/${image}`} alt="" id={id} onClick={getId} className="cardImage"/>
                </Link>
                <p>{title}</p>
                <p className={promotion > 0 && 'overline'}>${price}</p>  
                {promotion > 0 && (<p>${(item.price).replaceAll('.','') - ((item.price).replaceAll('.','') * (promotion/100))}</p>)}   
            </div>
        </>
    )
}

export default Items;