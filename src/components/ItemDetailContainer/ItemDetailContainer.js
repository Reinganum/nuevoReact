import {useState,useEffect} from "react";
import {arrProducts} from '../Products/Products';
import ItemDetails from '../ItemDetails/ItemDetails'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () =>{
    const {id} = useParams();
    const [itemData, setItemData] = useState({});
    const getItem = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(arrProducts)
        }, 2000); 
    })
    useEffect(()=>{
        getItem
        .then((data)=>{
            data.filter((product)=>{
                if(product.id == id){
                    setItemData(product)
                }
        })
        .catch((error)=>{
            console.log("hubo un error en la llamada")
        })
        .finally(()=>{
        })
    },[])
})
    return(
        <>
            <div className="detailsOuterContainer">
                <h1 className="detailTitle">{itemData.title}</h1>
                <h3 className="detailCategory">{itemData.category}</h3>
                <div className="detailsContainer">
                    <ItemDetails itemData={itemData}/>
                </div>
            </div>
        </>
    )
}

export default ItemDetailContainer;