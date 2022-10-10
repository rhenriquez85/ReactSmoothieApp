import styled from 'styled-components';

const Container = styled.div`
    border-top: grey solid 2px;
    border-image: linear-gradient(to right, grey, black, black, black, grey) 1;
    justify-content: center;

    p {
        float: right;
        margin-right: 25.5%;
        font-weight: 100;
    }

    p:hover {
        color: gold;
        font-weight: 500;
        cursor: help;
    }
    
    @media (pointer:coarse), (pointer:none), (max-width:800px) {
        display: flex;

        p {
            display: flex;
            font-size: 3.2vw;
            font-style: italic;
            font-weight: 100;
            margin: auto 0;
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