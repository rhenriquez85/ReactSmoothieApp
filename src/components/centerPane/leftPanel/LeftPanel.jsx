import { useContext } from 'react';
import styled from 'styled-components';
import { ScrollList } from './scrollList/ScrollList';
import { leftPanelViewModel } from './LeftPanelViewModel';
import { MenuContext } from '../../../store/menu-context';

const Container = styled.div`
    display: grid;
    background-color: grey;
    border-right: black solid 2px;
    overflow-y: auto;
    padding-bottom: 20px;

    @media (pointer:coarse), (pointer:none), (max-width:800px) {
        padding: 0;
        margin: 0;
    }
`;

const Title = styled.div`
    text-align: center;
    margin: 10px;
    font-weight: bold;

    @media (pointer:coarse), (pointer:none), (max-width:800px) {
        font-size: 3vw;
        padding: 0;
        margin: 1vh 0;
    }
`;

const LeftPanel = (props) => {
    const menuCtx = useContext(MenuContext);
    const { data, menuTitle } = leftPanelViewModel(props, { menuCtx });

    return (
        <Container>
            <Title>{menuTitle}</Title>
            <ScrollList data={data} />
        </Container>
    );
};

export { LeftPanel };