import styled from 'styled-components';
import { OrderItem } from '../orderItem/OrderItem';

const StyledList = styled.ul`
    list-style: none;
    padding: 10px;
    padding-top: 0;
    margin: 0px;

    @media (pointer:coarse), (pointer:none), (max-width: 800px) {
        padding: 0 1vw;
        margin: 0;
    }
`;

const OrderList = () => {
    const data = [
        { name: 'Rainbow Road', price: 10, amount: 2 },
        { name: 'Quesadilla Quartet adfasd fasdfsdf', price: 12, amount: 1 },
        { name: 'Rainbow Road', price: 10, amount: 2 },
        { name: 'Quesadilla Quartet adfasd fasdfsdf', price: 12, amount: 1 },
    ];

    const OrderItems = data.map((item) =>
        <li key={item.name}>
            <OrderItem data={item} />
        </li>
    );

    return (
        <StyledList>
            {OrderItems}
        </StyledList>
    );
};

export { OrderList };