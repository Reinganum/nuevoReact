import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { FaShoppingCart} from 'react-icons/fa';

const CartWidget = ({})=> {
    const {cartItems, clear,removeFromCart} = useContext(CartContext)
    const [visibility, setVisibility]=useState(true);
    const changeVisilibity=()=>{
        visibility ? setVisibility(false) : setVisibility(true)
    }

    useEffect(()=>{
        if (visibility===false){
            setVisibility(true)
            setTimeout(() => {
                setVisibility(false)
            },2000); 
        }
        
    },[cartItems])
    
    return(
        <>
            <div>
                <FaShoppingCart className='CartIcon' onClick={changeVisilibity}/>
                <p className='CartCounter'>{0}</p>
            </div>
            <div className={`cartWidgetItems ${visibility ? "visible" : "hidden"}`}>
                {cartItems.map((item)=>{
                    return(
                        <div key={item.id} className="cartItem">
                            <div>
                                <img className='cartWidgetImg' src={`/assets/${item.image}`}></img>
                            </div>
                            <div>
                                <p>{item.title}</p>
                                <p>{`Cantidad : ${item.counter}`}</p>
                            </div>
                            <button className="RemoveBtn" onClick={()=>removeFromCart(item.id)}>Quitar</button>
                        </div>
                    )
                })}
                <button onClick={clear} className="RemoveBtn">Vaciar carro</button>
            </div>
            
        </>
    )
};

export default CartWidget;