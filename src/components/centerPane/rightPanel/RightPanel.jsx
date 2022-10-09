import { useContext } from 'react';
import styled from 'styled-components';
import { OrderList } from './orderList/OrderList';
import { rightPanelViewModel } from './RightPanelViewModel';
import { CartContext } from '../../../store/cart-context';

const Container = styled.div`
    display: grid;
    grid-template-rows: 10% 90%;
    background-color: white;
    border-left: black solid 2px;
    overflow-y: auto;

    @media (pointer:coarse), (pointer:none), (max-width: 800px) {
        font-size: 3vw;
    }
`;

const Title = styled.div`
    text-align: center;
    margin: 10px;
    font-weight: bold;

    @media (pointer:coarse), (pointer:none), (max-width: 800px) {
        font-weight: 600;
        text-align: left;
        margin: 1vh 1vw;
        padding: 0;
    }
`;

const RightPanel = (props) => {
    const cartCtx = useContext(CartContext);

    console.log(cartCtx);

    const data = [
        { name: 'Rainbow Road', price: 10, amount: 2 },
        { name: 'Quesadilla Quartet adfasd fasdfsdf', price: 12, amount: 1 },
    ];

    // const OrderItems = data.map((item) =>
    //     <li key={item.name}>
    //         <OrderItem data={item} />
    //     </li>
    // );

    const { items } = rightPanelViewModel(props, cartCtx);
    console.log('rightpanel', items);

    return (
        <Container>
            <Title>Order List</Title>
            {/* <OrderList /> */}
            <OrderList items={data} />
        </Container>      
    );
};

export { RightPanel };