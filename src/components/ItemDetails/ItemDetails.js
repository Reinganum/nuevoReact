import ItemCounter from "../ItemCount/ItemCount"

const ItemDetails = (itemData) =>{
    const {image,price,description,stock,handleClick} = itemData.itemData
    return(
        <>
            <div className="detailContainer">
                <div>
                    <img className="detailImg" src={`/assets/${image}`} alt=""></img>
                    <p className="price">${price}</p>
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