import React from "react";
import '../Items/Items'
import '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import {FaCreditCard} from 'react-icons/fa';

const Items = ({item, handleClick}) =>{ 
    const {image,title,price,id,category,promotion} = item;
    const getId = event => {
    }
    var formatoPeso = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'CLP',
    })
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
                <p><FaCreditCard/>Compra en cuotas</p>
                <p className={promotion > 0 ? 'overline' : undefined}>{formatoPeso.format(price)}</p>  
                {promotion > 0 && (<p>{formatoPeso.format((item.price).replaceAll(',','') - ((item.price).replaceAll(',','') * (promotion/100)))}</p>)}   
            </div>
        </>
    )
}

export default Items;