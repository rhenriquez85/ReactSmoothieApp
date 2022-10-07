import styled from 'styled-components';
import logo from '../../../images/logo.jpeg';

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
    /* border: gray solid 5px; */
    border: #e37d00 solid 7px;
    /* border: #403f3f solid 5px; */
    /* border: darkblue solid 5px; */
    margin: auto 8px;

    transition: .8s ease; 

    :hover {
        cursor: pointer;
        /* border-color: gold; */
        border-color: #c00101;
        /* border-color: darkblue; */

        -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
        transition: .8s ease;
    }

    @media (pointer:coarse), (pointer:none), (max-width:800px) {
        outline: none;
        margin: auto;
        /* border: #e37d00 solid 8px; */
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


const LeftCorner = () => {
    return (
        <Container>
            <StyledLogo src={logo}/>
            <StyledTitle>Admiral Castellanos's Galactic Smoothie Shop</StyledTitle>
        </Container>
    );
};

export { LeftCorner };