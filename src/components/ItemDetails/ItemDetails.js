import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import ItemCounter from "../ItemCount/ItemCount"

const ItemDetails = ({itemData, stock}) =>{
    const {image,price,description} = itemData
    const [quantitySelected,setQuantitySelected]=useState(0)
    return(
        <>
            <div className="detailContainer">
                <div>
                    <img className="detailImg" src={`/assets/${image}`} alt=""></img>
                    <p className="price">${price}</p>
                    {
                    quantitySelected > 0 ? <Link to={'/cart'}><button>Terminar Compra</button></Link> : <ItemCounter stockActual={stock} setQuantitySelected={setQuantitySelected}/>
                    }
                </div>
                <div className="productDescription">
                    <h4>Product description:</h4>
                    <p>{description}</p>
                </div>
                {console.log(quantitySelected)}
                
            </div>
        </>
    )
}

export default ItemDetails