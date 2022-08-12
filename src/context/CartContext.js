import { createContext, useState } from "react";

const CartContext= createContext()

const CartProvider = ({children}) =>{
    const [cartItems,setCartItems]=useState([])
    const [counter, setCounter] = useState(1);
    const addItemToCart=(item)=>{
      const isItemInCart = cartItems.find(
        (itemInCart) => itemInCart.id === item.id
      );
      if(isItemInCart){
        const newArr = cartItems.map(itemInCart=>{
            if(itemInCart.id===item.id){
                return {...itemInCart, counter: itemInCart.counter + item.counter};
            } else {
                return itemInCart;
            }
        });
        setCartItems(newArr);
      } else {
        setCartItems([...cartItems,item]);
      }
    };

    const clear=()=>{
        setCartItems([]);
    }
    const removeFromCart=(id)=>{
        const newCart = cartItems.filter((item)=> item.id !== id);
        setCartItems(newCart);
    }
    const data={
        cartItems,
        setCartItems,
        addItemToCart,
        clear,
        counter,
        setCounter,
        removeFromCart,
    }
    
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export {CartContext};