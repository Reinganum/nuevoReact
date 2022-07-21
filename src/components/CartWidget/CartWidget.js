import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({contador})=> {
    return(
        <div>
            <FaShoppingCart className='CartIcon'/>
            <p className='CartCounter'>{contador}</p>
        </div>
    )
};

export default CartWidget;