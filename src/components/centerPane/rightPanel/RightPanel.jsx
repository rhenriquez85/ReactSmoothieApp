import styled from 'styled-components';
import { OrderList } from './orderList/OrderList';

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

const RightPanel = () => {

    return (
        <Container>
            <Title>Order List</Title>
            <OrderList />
        </Container>      
    );
};

export { RightPanel };