import {useState} from "react"
import {Link} from 'react-router-dom'
import ItemCounter from "../ItemCount/ItemCount"

const ItemDetails = ({itemData, stock}) =>{
    const {image,price,description,promotion} = itemData
    const [quantitySelected,setQuantitySelected]=useState(0)
    var formatoPeso = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'CLP',
    })
    return(
        <>
            <div className="detailContainer">
                <div>
                    <img className="detailImg" src={`/assets/${image}`} alt=""></img>
                    
                    <p className={promotion > 0 ? 'overline' : undefined}>{formatoPeso.format(price)}</p> {promotion > 0 ? (<p>{formatoPeso.format((price).replaceAll(',','') - ((price).replaceAll(',','') * (promotion/100)))}</p>) : undefined}
                    {
                    quantitySelected > 0 ? <Link to={'/cart'}><button className="BuyBtn">Terminar Compra</button></Link> : <ItemCounter stockActual={stock} itemData={itemData} setQuantitySelected={setQuantitySelected}/>
                    }
                </div>
                <div className="productDescription">
                    <h4>Product description:</h4>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default ItemDetails