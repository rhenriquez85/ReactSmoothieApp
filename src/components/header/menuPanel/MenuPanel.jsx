import styled from 'styled-components';
import { MenuItem } from './menuItem/MenuItem'; 

const Container = styled.div`
    display: grid;

    .title {
        margin: auto;
        color: green;
        font-style: italic;
        font-weight: bold;
    }
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: end;

    @media (pointer:coarse), (pointer:none), (max-width:800px) {
        justify-content: space-between;
    }
`;

const MenuPanel = () => {
    return (
        <Container>
            <div className='title'>Welcome!</div>
            <Menu>
                <MenuItem itemName={'Smoothies'} itemSrc={''} />
                <MenuItem itemName={'Bites'} itemSrc={''} />
                <MenuItem itemName={'Info'} itemSrc={''} />
            </Menu>
        </Container>
    )
};

export { MenuPanel };