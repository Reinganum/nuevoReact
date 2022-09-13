import {useState,useEffect} from "react";
import ItemDetails from '../ItemDetails/ItemDetails'
import {useParams} from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";
import db from "../../firebaseConfig";
import {doc, getDoc} from "firebase/firestore";

const ItemDetailContainer = () =>{
    const [loading, setLoading]=useState(true)
    const { id } = useParams();
    const [itemData, setItemData] = useState({});
    useEffect( () => {
        getItem()
        .then((res)=>{
            setItemData(res)
        })
    },[id])
    const getItem = async () =>{
        const docRef = doc(db, 'items', id)
        const docSnapshot = await getDoc(docRef)
        let item = docSnapshot.data()
        item.id = docSnapshot.id
        setTimeout(()=>{
            setLoading(false)
        },1000) 
        return item
    }
    return(
        <>
        {loading? 
            <ClipLoader className="clipLoader" color={"#D0021B"} loading={loading} size={100} />
            :
            <div className="detailsOuterContainer">
                <h1 className="detailTitle">{itemData.title}</h1>
                <h3 className="detailCategory">{itemData.category}</h3>
                <div className="detailsContainer">
                    <ItemDetails itemData={itemData} stock={itemData.stock}/>
                </div> 
            </div>
        }
        </>
    )
}

export default ItemDetailContainer