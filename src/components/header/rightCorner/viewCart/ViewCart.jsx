import styled from 'styled-components';
import cart from '../../../../images/cart.png';

const Container = styled.div`
    display: flex;
    align-items: center;

    :hover {
        cursor: pointer;
    }
`;

const Title = styled.p`
    font-weight: 600;
    margin: auto;
    :hover {
        font-weight: 700;
    }

    @media (pointer:coarse), (pointer:none), (max-width: 800px) {
        display: none;
    }
`;

const Cart = styled.img`
    margin: auto;
    margin-right: 25px;
    width: 30px;
    height: 30px;

    img{
        transition: 1s ease;   
    }

    :hover{
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
        transition: 1s ease;
    }
`;

const ViewCart = () => {
    return (
        <Container>
            <Title>View Cart</Title>
            <Cart src={cart} alt=""/>
        </Container>
    );
};

export { ViewCart };