import { useContext } from 'react';
import styled from 'styled-components';
import { AddDeleteButton } from '../../common/AddDeleteButton';
import { messageAreaViewModel } from './MessageAreaViewModel';
import { PageContext } from '../../../store/page-context';
import { CartContext } from '../../../store/cart-context';


const Container = styled.div`
    display: grid;
    grid-template-rows: 70% 10% 20%;
    justify-content: center;
    margin: 20px 25px;
    font-weight: 500;

    img {
        width: 350px;
        height: 250px;
        object-fit: contain;
    }
    
    .priceline {
        display: flex;
        justify-content: space-between;
    }

    .priceline span {
        color: darkred;
        font-weight: bold;
    }

    @media (pointer:coarse), (pointer:none), (max-width:800px) {
        grid-template-rows: 62.5% 10% 22.5%;
        font-size: 3vw;
        margin: 3vw;
        font-weight: bold;

        img {
            width: 45vw;
            height: 52.5vw;
            margin: 0 auto;
        }
    }
`;

const MessageArea = (props) => {
    const pageCtx = useContext(PageContext);
    const cartCtx = useContext(CartContext);
    const { title, price, img, description } = pageCtx.state;
    const { addToOrder } = messageAreaViewModel(props, { pageCtx, cartCtx });

    const priceline = <div><span>{title}</span> ${price}</div>;

    console.log('msgarea');

    return (
        <Container>
            <img src={img} />
            <div className='priceline'>
                {priceline}
                <AddDeleteButton sign='+' caption='Add To Order' clickHandler={addToOrder} />
            </div>
            <div>{description}</div>
        </Container>
    );
};

export { MessageArea };