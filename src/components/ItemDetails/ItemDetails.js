import ItemCounter from "../ItemCount/ItemCount"

const ItemDetails = (itemData) =>{
    const {image,price,description} = itemData.itemData
    return(
        <>
            <div>
                <img src={`/assets/${image}`} alt=""></img>
                <p className="price">${price}</p>
            </div>
            <div className="product-description">
                <h4>Product description:</h4>
                <p>{description}</p>
            </div>
        </>
    )
}

export default ItemDetails