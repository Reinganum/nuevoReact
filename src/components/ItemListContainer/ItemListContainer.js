import React from "react";
import {useState,useEffect} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ItemList from "../ItemList/ItemList"
import '../ItemListContainer/ItemListContainer';
import '../ItemDetailContainer/ItemDetailContainer'
import {useParams} from 'react-router-dom';
import { collection, getDocs} from "firebase/firestore"
import db from "../../firebaseConfig";

const ItemListContainer = () =>{
    const [loading, setLoading]=useState(true)
    const {itemCategory} = useParams();  
    const [itemsList, setItemsList]=useState([]);
    const getItems = async () =>{
        const itemCollection = collection(db, 'items')
        const itemSnapshot = await getDocs(itemCollection)
        const itemList = itemSnapshot.docs.map((doc)=>{
            let item = doc.data()
            item.id = doc.id
            setTimeout(()=>{
                setLoading(false)
            },500) 
            return item
        })
        return itemList
    }
    
    useEffect(()=>{
        getItems()
        .then((res)=>{
            if (itemCategory) {
                const categorized = res.filter((item)=>item.category===itemCategory || (item.title.toLowerCase()).includes(itemCategory.toLowerCase()))
                setItemsList(categorized)
            } else {
                setItemsList(res)
            }
        })
    },[itemCategory])

    return(
        <div>
            {loading ? 
            <ClipLoader className="clipLoader" color={"#D0021B"} loading={loading} size={100} />
            : 
            <div>
                <h1 className="titulo">Displaying {itemCategory ? itemCategory : "Products"}</h1>
                <div className="ItemListContainer">
                    <ItemList itemData={itemsList}/>
                </div>
            </div>}
        </div>
        
    )
}

export default ItemListContainer;