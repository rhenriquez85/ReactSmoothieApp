import { useContext } from 'react';
import styled from 'styled-components';
import { TotalCart } from './totalCart/TotalCart';
import { ViewCart } from './viewCart/ViewCart';
import { rightCornerViewModel } from './RightCornerViewModel';
import { CartContext } from '../../../store/cart-context';

const Container = styled.div`
    display: grid;
    align-items: end;
    
    @media (pointer:coarse), (pointer:none), (max-width:800px) {
        margin-left: 3vw;
    }
`;

const RightCorner = (props) => {
    const cartCtx = useContext(CartContext);
    const { totalCart } = rightCornerViewModel(props, { cartCtx });

    return (
        <Container>
            <ViewCart />
            <TotalCart amount={totalCart()} />
        </Container>
    );
};

export { RightCorner };