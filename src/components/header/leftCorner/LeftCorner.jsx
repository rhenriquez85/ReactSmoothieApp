import styled from 'styled-components';
import logo from '../../../images/new2.jpeg';

const Container = styled.div`
    /* border-color: black; */
    /* border-width: 2px; */
    /* border-right-style: solid; */
    /* vertical-align: center; */
    /* text-align: center; */
    display: flex;
    /* justify-content: center; */
    /* display: grid; */
    /* margin: auto; */
    align-items: center;
    /* padding: auto 5px; */
`;

const StyledLogo = styled.img`
    position: relative;
    width: 40px;
    height: 40px;
    /* outline: black solid 1px; */
    border-radius: 50%;
    border: gray solid 5px;
    margin: auto 8px;
`;

const StyledTitle = styled.div`
    position: relative;
    display: inline-block;
    color: gold;
    /* padding: 5px auto; */
    /* margin: 5px auto; */
    font-style: italic;
    font-weight: 900;
    /* width: fit-content; */
    /* width: -moz-fit-content; */
    /* font-family: brush script mt; */
    /* font-size: 20px; */

    font-family: luminari;
    font-size: 15.5px;
    /* font-size: 1em; */
    /* font-size: 16px; */

    @media (pointer:coarse), (pointer:none), (max-width:768px) {
        display: none;
    }
`;


const LeftCorner = () => {
    return (
        <Container>
            <StyledLogo src={logo}/>
            {/* <p>Admiral Castellanos's Galactic Smoothie Shop</p> */}
            <StyledTitle>Admiral Castellanos's Galactic Smoothie Shop</StyledTitle>
        </Container>
    );
};

export { LeftCorner };