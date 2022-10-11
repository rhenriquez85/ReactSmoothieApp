import { useContext } from 'react';
import styled from 'styled-components';
import { TotalCart } from './totalCart/TotalCart';
import { ViewCart } from './viewCart/ViewCart';
import { rightCornerViewModel } from './RightCornerViewModel';
import { CartContext } from '../../../store/cart-context';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: grid;
    align-items: end;
    
    @media (pointer:coarse), (pointer:none), (max-width:800px) {
        margin-left: 3vw;
    }
`;

const RightCorner = (props) => {
    const cartCtx = useContext(CartContext);
    const navigate = useNavigate();
    const { totalCart, goToCheckout } = rightCornerViewModel(props, { cartCtx }, { navigate });

    return (
        <Container onClick={goToCheckout} >
            <ViewCart />
            <TotalCart amount={totalCart()} />
        </Container>
    );
};

export { RightCorner };