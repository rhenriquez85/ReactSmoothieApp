import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    justify-content: center;
    padding: 10px 0px;

    img {
        width: 120px;
        height: 100px;
        object-fit: cover;
        border-radius: 5px;
        border: lightblue solid 1px;
        margin-bottom: 2px;
    }

    p {
        color: white;
        font-family: 'Trebuchet MS', sans-serif;
        font-weight: 200;
        margin: 0px;
        padding: 0px;
    }

    .title {

    }

    .price {

    }

    @media (pointer:coarse), (pointer:none), (max-width: 800px) {
        width: 12vw;
        padding: 0 0 2vw;
        margin: 0;

        img {
            width: 12vw;
            padding: 0;
            margin: 0;
        }

        p {
            font-size: 3vw;
            width: 12vw;
            padding: 0;
            margin: 0;
        }
    }
`;

const ScrollItem = (props) => {
    const { title, price, img } = props;

    return (
        <Container>
            <img src={img}></img>
            <p className='title'>{title}</p>
            <p className='price'>${price}</p>
        </Container>
    )
};

export { ScrollItem };