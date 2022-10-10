import { useContext } from 'react';
import styled from 'styled-components';
import { leftCornerViewModel } from './LeftCornerViewModel';
import { MenuContext } from '../../../store/menu-context';

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const StyledLogo = styled.img`
    position: relative;
    width: 40px;
    height: 40px;
    outline: #403f3f solid 1px;
    border-radius: 50%;
    border: #e37d00 solid 7px;
    margin: auto 8px;
    transition: .6s ease; 

    :hover {
        cursor: pointer;
        border-color: #c00101;
        -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
        transition: .6s ease;
    }

    @media (pointer:coarse), (pointer:none), (max-width:800px) {
        outline: none;
        margin: auto;
    }
`;

const StyledTitle = styled.div`
    position: relative;
    display: inline-block;
    color: gold;
    font-style: italic;
    font-weight: 900;
    font-family: luminari;
    font-size: 15.5px;

    @media (pointer:coarse), (pointer:none), (max-width:800px) {
        display: none;
    }
`;

const LeftCorner = (props) => {
    const menuCtx = useContext(MenuContext);
    const { logo, clickHandler } = leftCornerViewModel(props, { menuCtx });

    return (
        <Container>
            <StyledLogo src={logo} onClick={clickHandler} />
            <StyledTitle>Admiral Castellanos's Galactic Smoothie Shop</StyledTitle>
        </Container>
    );
};

export { LeftCorner };