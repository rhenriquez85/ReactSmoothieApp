import { useContext, useState } from 'react';
import styled from 'styled-components';
import { AddDeleteButton } from '../../../common/AddDeleteButton';
import { CounterButton } from '../../../common/CounterButton';
import { orderItemViewModel } from './OrderItemViewModel';
import { CartContext } from '../../../../store/cart-context';

const Container = styled.div`
    display: grid;
    font-size: 15px;
    padding-bottom: 25px;

    .remove {
        display: flex;
        justify-content: space-between;
        width: fit-content;
        margin-top: 5px;
    }

    .remove input {
        margin-left: 30px;
    }

    @media (pointer:coarse), (pointer:none), (max-width: 800px) {
        font-size: 3vw;
        padding-bottom: 1.5vh;

        .remove {
            display: grid;
        }

        .remove input {
            width: 10vw;
            margin: 5px auto;
        }
    }
`;

const OrderItem = (props) => {
    const [removeAmount, setRemoveAmount] = useState(1);
    const { title, price, amount } = props.data;
    const cartCtx = useContext(CartContext);
    const { removeFromCart } = orderItemViewModel(props, { cartCtx }, { removeAmount });
    
    const priceline = `$${price} x ${amount} = $${price * amount}`;

    return (
        <Container>
            <div className='name'>{title}</div>
            <div className='priceline'>{priceline}</div>
            <div className='remove'>
                <AddDeleteButton sign='-' caption='Remove' clickHandler={removeFromCart} />
                <CounterButton clickHandler={setRemoveAmount} />
            </div>
        </Container>
    );
};

export { OrderItem };