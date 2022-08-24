import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from 'react-icons/fa';
import Modal from '../Modal/Modal';
import db from "../../firebaseConfig";
import {collection, addDoc} from 'firebase/firestore'

const Checkout=()=>{
    const {cartItems, clear,removeFromCart} = useContext(CartContext)
    const [showModal, setShowModal]= useState(false)
    const [orderSuccess, setOrderSuccess] = useState()
    const [cartTotal,setCartTotal]=useState(0);
    const [deliveryType, setDeliveryType]=useState('');
    const [formData,setFormData]=useState({
        name: '',
        phone: '',
        email: ''
    })
    useEffect(()=>{
        if (cartItems.length > 0) {
        let totalPriceUnformatted = cartItems.reduce((acc, obj)=>{ return acc + (((obj.price).replaceAll('.', '')) * obj.counter); }, 0);
        let totalPrice=(Math.round(totalPriceUnformatted * 100) / 100).toLocaleString();
        setCartTotal(totalPrice)
        console.log(cartTotal)
        } else {
            setCartTotal(0)
        }
    },[cartItems])

    const handleChange=(e)=>{
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }
    const [order,setOrder]=useState({
        items: cartItems.map((item)=>{
            return {
                id:item.id,
                title:item.title,
                price:item.price,
                quantity:item.counter,
            }
        }),
        buyer: {},
        total: cartTotal,
        date: new Date().toLocaleDateString(),
        delivery: deliveryType
    })
    const submitData=(e)=>{
        e.preventDefault()
        pushFormData({...order, buyer: formData})
    }

    const pushFormData = async (newOrder)=>{
        const collectionOrder = collection(db, 'orders')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setOrderSuccess(orderDoc.id)
        console.log('Nueva orden generada : ', orderDoc)
    } 

    return(
        <>
            {showModal &&
                    (<Modal title={"DATOS DE CONTACTO"} close={()=>setShowModal()}>
                        {
                            orderSuccess ? (
                                <>
                                    <h2>Orden enviada exitosamente</h2>
                                    <h3>Id de compra: {orderSuccess}</h3>
                                    <h3>Fecha de compra: {order.date}</h3>
                                    <h3>Tipo de Envío: {deliveryType}</h3>
                                </>
                            ) : (
                                <div className='userForm'>
                                    <form onSubmit={submitData}>
                                        <label><input className='formDataInput' type="text" placeholder='Name' name='name' value={formData.name} onChange={handleChange}/></label>
                                        <label><input className='formDataInput'type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange}/></label>
                                        <label><input className='formDataInput' type="number" placeholder='Phone' name='phone' value={formData.phone} onChange={handleChange}/></label>
                                        <label>
                                            <h3>DELIVERY TYPE</h3>
                                            <select className='deliveryType' onChange={
                                                (e)=>{
                                                let selectedDelivery = e.target.value
                                                setDeliveryType(selectedDelivery)
                                                }
                                            }>
                                                <option value="regular">24 Hours</option>
                                                <option value="express">72 Hours</option>
                                                <option value="24horas">1 Week</option>
                                            </select>
                                        </label>
                                        <label><button type='submit' className='BuyBtn'>Submit</button></label>
                                    </form>
                                </div>
                            )
                        }
                    </Modal>)}
            <div>
                <h1>Checkout: Finalizar compra</h1>
            </div>
            <div>
                {cartItems.map((item)=>{
                    return(
                        <div key={item.id} className="cartItem">
                            <table className='cartTable'>
                                <tr>
                                    <td><img className='cartWidgetImg' src={`/assets/${item.image}`}></img></td>
                                    <td>{item.title}</td>
                                    <td>{item.counter}</td>
                                    <td>{item.price}</td>
                                    <td>{((item.price).replaceAll('.','')) * item.counter}</td>
                                    <td><FaTrashAlt className="removeIcon" onClick={!showModal && (()=>removeFromCart(item.id))}>Quitar</FaTrashAlt></td>
                                </tr>
                            </table>
                        </div>
                    )
                })}
                {cartItems.length > 0 && <p className='totalValue'>{`VALOR TOTAL : ${cartTotal}`}</p> } 
                <p>{cartItems.length===0 && "No tienes productos agregados al carrito"}</p>
                <button onClick={clear} className="RemoveBtn checkout">{cartItems.length>0 ? "Vaciar carro" : <Link to='/'>"Volver a Comprar"</Link>}</button>
                {cartItems.length > 0 && <button className="RemoveBtn checkout" onClick={()=>setShowModal(true)}>Ir a pagar</button>}
            </div>
        </>
    )
}

export default Checkout;