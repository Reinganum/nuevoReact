import React from "react";
import {useState,useEffect} from "react";
import ItemList from "../ItemList/ItemList"
import '../ItemListContainer/ItemListContainer';
import '../ItemDetailContainer/ItemDetailContainer'
import {useParams} from 'react-router-dom';
import { collection, getDocs} from "firebase/firestore"
import db from "../../firebaseConfig";

const ItemListContainer = () =>{
    const {itemCategory} = useParams();  
    const [itemsList, setItemsList]=useState([]);
    const getItems = async () =>{
        const itemCollection = collection(db, 'items')
        const itemSnapshot = await getDocs(itemCollection)
        const itemList = itemSnapshot.docs.map((doc)=>{
            let item = doc.data()
            item.id = doc.id
            return item
        })
        return itemList
    }
    
    useEffect(()=>{
        getItems()
        .then((res)=>{
            if (itemCategory) {
                const categorized = res.filter((item)=>item.category===itemCategory)
                setItemsList(categorized)
            } else {
                setItemsList(res)
            }
        })
    },[itemCategory])

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