import styled from 'styled-components';
import { ScrollList } from './scrollList/ScrollList';

const Container = styled.div`
    display: grid;
    background-color: grey;
    border-right: black solid 2px;
    overflow-y: auto;

    @media (pointer:coarse), (pointer:none), (max-width:800px) {
        /* display: absolute;
        width: 100%; */
    }
`;

const Title = styled.div`
    text-align: center;
    margin: 10px;
`;

const LeftPanel = () => {
    return (
        <Container>
            <Title>Smoothies</Title>
            <ScrollList />
        </Container>
    );
};

export { LeftPanel };




// Title
// scroll list
    // item picture
    // item name
    // item price
    // item add/delete
