import styled from 'styled-components';

const Container = styled.div`
    border-top: grey solid 2px;
    border-image: linear-gradient(to right, grey, black, black, black, grey) 1;
    justify-content: center;

    p {
        display: none;
    }
    
    @media (pointer:coarse), (pointer:none), (max-width:800px) {
        display: flex;

        p {
            display: flex;
            font-size: 3.2vw;
            font-style: italic;
            font-weight: 100;
        }
    }
`;

const Footer = () => {

    return (
        <Container>
            <p>&gt; &gt; Admiral Castellanos's Galactic Smoothie Shop</p>
        </Container>
    );
};

export { Footer };