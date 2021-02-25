import Button from '@material-ui/core/Button'
//Types
import { CartItemType } from '../App';
import Item from '../Item/Item';
// Styles
import { Wrapper } from './CardItem.styles';

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart}) => (
    <Wrapper>
        <div>
            <h3>{Item.title}</h3>
            <div className="information">
                
            </div>
        </div>
    </Wrapper>
    );

export default CartItem;