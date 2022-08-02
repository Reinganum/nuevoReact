import React from "react";
import {useState,useEffect} from "react";
import ItemList from "../ItemList/ItemList"
import '../ItemListContainer/ItemListContainer';
import '../ItemDetailContainer/ItemDetailContainer'
import {arrProducts} from '../Products/Products';

const ItemListContainer = ({greeting}) =>{

    const [itemsList, setItemsList]=useState([])
    const getArrProducts = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(arrProducts)
        }, 2000); 
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
    },[])

    return(
        <>
            <h1 className="titulo">{greeting}</h1>
            <div className="ItemListContainer">
                <ItemList itemData={itemsList}/>
            </div>
        </>
    )
}

export default ItemListContainer;