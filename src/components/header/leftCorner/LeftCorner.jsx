import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { leftCornerViewModel } from './LeftCornerViewModel';
import { MenuContext } from '../../../store/menu-context';
import { PageContext } from '../../../store/page-context';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    align-items: center;
    
    a {
        margin: auto;
    }
`;

const StyledLogo = styled.img`
    position: relative;
    width: 40px;
    height: 40px;
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
    const pageCtx = useContext(PageContext);
    const { logo, updateMenu } = leftCornerViewModel(props, { menuCtx, pageCtx });

    useEffect(() => {
        updateMenu();
    }, []);

    return (
        <Container>
            <Link to={'favorites'}>
                <StyledLogo src={logo} onClick={updateMenu} />
            </Link>
            <StyledTitle>Admiral Castellanos's Galactic Smoothie Shop</StyledTitle>
        </Container>
    );
};

export { LeftCorner };