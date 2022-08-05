import React from "react";
import {useState,useEffect} from "react";
import ItemList from "../ItemList/ItemList"
import '../ItemListContainer/ItemListContainer';
import '../ItemDetailContainer/ItemDetailContainer'
import arrProducts from '../Products/Products';
import {useParams} from 'react-router-dom';

const ItemListContainer = ({greeting}) =>{
    const {itemCategory} = useParams();  
    const [itemsList, setItemsList]=useState([]);
    const categorizedItems = arrProducts.filter((product)=>product.category===itemCategory)
    const getArrProducts = new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (itemCategory) {
                resolve(categorizedItems)
            } else {
                resolve(arrProducts)
        }
        }, 1500); 
    })
    useEffect(()=>{
        getArrProducts
        .then((data)=>{
            setItemsList(data)
        })
        .catch((error)=>{
            console.log("hubo un error en la llamada")
        })
        .finally(()=>{
        })
    },[categorizedItems])

    return(
        <>
            <h1 className="titulo">Seccion {itemCategory}</h1>
            <div className="ItemListContainer">
                <ItemList itemData={itemsList}/>
            </div>
        </>
    )
}

export default ItemListContainer;