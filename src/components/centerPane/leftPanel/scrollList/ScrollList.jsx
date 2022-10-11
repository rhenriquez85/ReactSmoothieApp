import { useContext } from 'react';
import styled from 'styled-components';
import { ScrollItem } from '../scrollItem/ScrollItem';
import { PageContext } from '../../../../store/page-context';
import { CartContext } from '../../../../store/cart-context';

const StyledList = styled.ul`
    list-style-type: none;
    background-color: darkred;
    width: 75%;
    margin: 0px auto;
    padding: 10px 10px 6px;
    border-radius: 10px;

    @media (pointer:coarse), (pointer:none), (max-width: 800px) {
        width: 12vw;
        padding: 0 2vw;
        margin-bottom: 2vh;
    }
`;

const ScrollList = (props) => {
    const pageCtx = useContext(PageContext);
    const cartCtx = useContext(CartContext);
    const context = {
        pageCtx,
        cartCtx,
    }

    const { data } = props;
    const listItems = [];
    data.forEach((data) => {
        listItems.push(<li key={data.title}><ScrollItem data={data} context={context}/></li>);
    });

    return (
        <StyledList>
            {listItems}
        </StyledList>
    );
};

export { ScrollList };