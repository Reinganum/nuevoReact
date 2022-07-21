import React from "react";
import Items from "../Items/Items";
import '../ItemListContainer/ItemListContainer'


const ItemListContainer = ({greeting}) =>{
    return(
        <>
            <h1 className="titulo">{greeting}</h1>
            <div className="ItemListContainer">
                <Items image="producto1.jpg" title="World of Wong Kar Wai" price="200000"/>
                <Items image="producto2.jfif" title="The dark knight trilogy" price="180000"/>
                <Items image="producto3.jpg" title="The Hobbit trilogy" price="220000"/>
                <Items image="producto4.jpg" title="Harry Potter Blue Ray" price="230000"/>
                <Items image="producto5.jpg" title="Terrorirzers Blue Ray" price="70000"/>
            </div>
        </>
    )
}

export default ItemListContainer;