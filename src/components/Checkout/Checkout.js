import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from 'react-icons/fa';
import Modal from '../Modal/Modal';
import db from "../../firebaseConfig";
import {collection, addDoc} from 'firebase/firestore'

const Checkout=()=>{
    const {cartItems, clear, removeFromCart} = useContext(CartContext)
    const [showModal, setShowModal]= useState(false)
    const [orderSuccess, setOrderSuccess] = useState()
    const [cartTotal,setCartTotal]=useState(0);
    const [deliveryType, setDeliveryType]=useState("");
    const [countriesDB, setCountriesDB]=useState([])
    const [country, setCountry]=useState()
    const [regionsDB, setRegionsDB]=useState([])
    const [region, setRegion]=useState()
    const [citiesDB, setCitiesDB]=useState([])
    const [city, setCity]=useState()
    const [formData,setFormData]=useState({
        name: '',
        surname:'',
        phone: '',
        email: '',
        address: '',
    })
    
    useEffect(()=>{
        if (cartItems.length > 0) {
        let totalPriceUnformatted = cartItems.reduce((acc, obj)=>{ return acc + (((obj.price).replaceAll(',', '')) * obj.counter); }, 0);
        let totalPrice=(Math.round(totalPriceUnformatted * 100) / 100).toLocaleString();
        setCartTotal(totalPrice)
        } else {
            setCartTotal(0)
        }
    },[cartItems])

    const handleChange=(e)=>{
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }
    const [order, setOrder]=useState({
        items: cartItems.map((item)=>{
            return {
                id:item.id,
                title:item.title,
                price:item.price,
                quantity:item.counter,
            }
        }),
        buyer: {},
        date: new Date().toLocaleDateString(),
    })
    const submitData=(e)=>{
        e.preventDefault()
        pushFormData({...order, buyer: formData, total: cartTotal, delivery: deliveryType, location: `${country},${region},${city}`})
    }

    const pushFormData = async (newOrder)=>{
        const collectionOrder = collection(db, 'orders')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setOrderSuccess(orderDoc.id)
        clear();
    } 

    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "WTY0TlYzTjI0Rjl3c0tVVkhMWjQ4SzNMQmtzNkIxQmJMQTR2RjNNWg==");

    var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
    };

    fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
    .then(response => response.json())
    .then(result => {
        setCountriesDB(result);})
    .catch(error => console.log('error', error));

    useEffect(()=>{
        if (country!==[]){
            fetch(`https://api.countrystatecity.in/v1/countries/${country}/states`, requestOptions)
        .then(response => response.json())
        .then(result => setRegionsDB(result))
        .catch(error => console.log('error', error));
        }
    },[country])

    useEffect(()=>{
        fetch(`https://api.countrystatecity.in/v1/countries/${country}/states/${region}/cities`, requestOptions)
        .then(response => response.json())
        .then(result => setCitiesDB(result))
        .catch(error => console.log('error', error));
    },[region])

    return(
        <>
            {showModal &&
                    (<Modal title={"CONTACT DETAILS"} close={()=>setShowModal()}>
                        {
                            orderSuccess ? (
                                <>
                                    
                                    <table className='orderTable'>
                                        <thead>
                                            <tr>
                                                <th colspan="2">ORDER SENT SUCCESFULLY</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Purchase ID:</td>
                                                <td>{orderSuccess}</td>
                                            </tr>
                                            <tr>
                                                <td>Buyer's name: </td>
                                                <td>{formData.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Buyer's phone: </td>
                                                <td>{formData.phone}</td>
                                            </tr>
                                            <tr>
                                                <td>Buyer's email: </td>
                                                <td>{formData.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Buyer's Address:</td>
                                                <td>{`${formData.address},${country},${region},${city},`}</td>
                                            </tr>
                                            <tr>
                                                <td>Delivery Type: </td>
                                                <td>{deliveryType}</td>
                                            </tr>
                                            <tr>
                                                <td>Date of order: </td>
                                                <td>{order.date}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </>
                            ) : (
                                <div className='userForm'>
                                    <form onSubmit={submitData}>
                                        <label><input className='formDataInput' type="text" placeholder='Name' name='name' value={formData.name} onChange={handleChange} required/></label>
                                        <label><input className='formDataInput' type="text" placeholder='Surname' name='surname' value={formData.surname} onChange={handleChange} required/></label>
                                        <label><input className='formDataInput'type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} required/></label>
                                        <label><input className='formDataInput' type="tel" placeholder='Phone' name='phone' value={formData.phone} onChange={handleChange} required/></label>
                                        <label><input className='formDataInput' type="text" placeholder='Adress' name='address' value={formData.address} onChange={handleChange} required/></label>
                                        <label>
                                            <select className='country' name='country' required onChange={
                                                (e)=>{
                                                let pais = e.target.value
                                                setCountry(pais)
                                                }
                                            }>
                                                <option defaultValue={"CL"}>Choose country</option>
                                                {countriesDB.map((country)=>{return country && <option key={country.id} value={country.iso2}>{country.name}</option>})}
                                            </select>
                                            <select className='region' required onChange={
                                                (e)=>{
                                                let region = e.target.value
                                                setRegion(region)
                                                }
                                            }>
                                                {regionsDB.map((region)=>{return region && <option key={region.id} value={region.iso2}>{region.name} </option>})}
                                            </select>
                                            <select className='city' required onChange={
                                                (e)=>{
                                                let city = e.target.value
                                                setCity(city)
                                                }
                                            }>
                                                {citiesDB.map((city)=>{return <option key={city.id} value={city.iso2}>{city.name}</option>})}
                                            </select>
                                            <h3>DELIVERY TYPE</h3>
                                            <select className='deliveryType' onChange={
                                                (e)=>{
                                                let selectedDelivery = e.target.value
                                                setDeliveryType(selectedDelivery)
                                            }}>
                                                <option value="regular">regular</option>
                                                <option value="express">express</option>
                                                <option value="24 horas">24 horas</option>
                                            </select>
                                        </label>
                                        <h3 className='totalCost'>Costo total: {
                                            cartTotal
                                            }</h3>
                                        <label><button type='submit' className='BuyBtn'>Submit</button>
                                        <button className='BuyBtn' onClick={()=>setShowModal(false)}>Close</button></label>
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
                            <div className='cartTable'>
                                <div className='cartData'><img className='cartWidgetImg' src={`/assets/${item.image}`}></img></div>
                                <div className='cartData'>{item.title}</div>
                                <div className='cartData'>{item.counter}</div>
                                <div className='cartData'>{item.price}</div>
                                <div className='cartData'>{((item.price).replaceAll('.','')) * item.counter}</div>
                                <div className='cartData'><FaTrashAlt className="removeIcon" onClick={!showModal ? (()=>removeFromCart(item.id)) : undefined}>Quitar</FaTrashAlt></div>
                            </div>
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