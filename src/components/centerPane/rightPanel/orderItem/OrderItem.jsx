import { useContext, useState } from 'react';
import styled from 'styled-components';
import { AddDeleteButton } from '../../../common/AddDeleteButton';
import { CounterButton } from '../../../common/CounterButton';
import { orderItemViewModel } from './OrderItemViewModel';
import { CartContext } from '../../../../store/cart-context';
import { PageContext } from '../../../../store/page-context';

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

    .name a:hover {
        color: darkorange;
        cursor: pointer;
        font-weight: 400;
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
    const pageCtx = useContext(PageContext);
    const { removeFromCart, linkToPage } = orderItemViewModel(props, { cartCtx, pageCtx }, { removeAmount });

    const priceline = `$${price} x ${amount} = $${price * amount}`;

    return (
        <Container>
            <div className='name'><a onClick={linkToPage}>{title}</a></div>
            <div className='priceline'>{priceline}</div>
            <div className='remove'>
                <AddDeleteButton sign='-' caption='Remove' clickHandler={removeFromCart} />
                <CounterButton clickHandler={setRemoveAmount} />
            </div>
        </Container>
    );
};

export { OrderItem };