import CartItem from '../CartItem/CardItem';
// Styles
import { Wrapper } from './Cart.styles';
//Types
import { CartItemType } from '../App';

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {

    return (
        <Wrapper>
            <h2>Your Shopping Card</h2>
            {cartItems.length === 0 ? <p>No items in card.</p> : null}
            {cartItems.map(item => (
                <CartItem 
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                />
            ))}
        </Wrapper>
    )
}

export default Cart;
