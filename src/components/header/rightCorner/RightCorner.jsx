import styled from 'styled-components';
import { TotalCart } from './totalCart/TotalCart';
import { ViewCart } from './viewCart/ViewCart';

const Container = styled.div`
    display: grid;
    align-items: end;
    
    @media (pointer:coarse), (pointer:none), (max-width:800px) {
        margin-left: 3vw;
    }
`;

const RightCorner = () => {

    return (
        <Container>
            <ViewCart />
            <TotalCart amount={250.00} />
        </Container>
    );
};

export { RightCorner };