import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from 'react-icons/fa';

const Checkout=()=>{
    const {cartItems, clear,removeFromCart} = useContext(CartContext)
    const [cartTotal,setCartTotal]=useState(0);
    useEffect(()=>{
        if (cartItems.length > 0) {
        let totalPriceUnformatted = cartItems.reduce((acc, obj)=>{ return acc + (((obj.price).replaceAll('.', '')) * obj.counter); }, 0);
        let totalPrice=(Math.round(totalPriceUnformatted * 100) / 100).toLocaleString();
        setCartTotal(totalPrice)
        } else {
            setCartTotal(0)
        }
    },[cartItems])

    return(
        <>
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
                                    <td><FaTrashAlt className="removeIcon" onClick={()=>removeFromCart(item.id)}>Quitar</FaTrashAlt></td>
                                </tr>
                            </table>
                        </div>
                    )
                })}
                {cartItems.length > 0 && <p className='totalValue'>{`VALOR TOTAL : ${cartTotal}`}</p> } 
                <p>{cartItems.length===0 && "No tienes productos agregados al carrito"}</p>
                <button onClick={clear} className="RemoveBtn checkout">{cartItems.length>0 ? "Vaciar carro" : <Link to='/'>"Volver a Comprar"</Link>}</button>
            </div>
        </>
    )
}

export default Checkout;