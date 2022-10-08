import styled from 'styled-components';
import { AddDeleteButton } from '../../../common/AddDeleteButton';

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

    .priceline {
        display: flex;
        justify-content: space-between;
    }

    .add-delete-buttons button:first-child {
        margin-right: 5px;
    }

    @media (pointer:coarse), (pointer:none), (max-width: 800px) {
        width: 12vw;
        padding: 2vw 0;
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

        .priceline {
            display: inline-block;
        }

        .add-delete-buttons button:first-child {
            margin-right: 0px;
        }

        .add-delete-buttons button {
            width: 100%;
        }
    }
`;

const ScrollItem = (props) => {
    const { title, price, img } = props;

    return (
        <Container>
            <img src={img}></img>
            <p>{title}</p>
            <div className='priceline'>
                <p>${price}</p>
                <div className='add-delete-buttons'>
                    <AddDeleteButton sign="+" />
                    <AddDeleteButton sign="-" />
                </div>
            </div>
        </Container>
    )
};

export { ScrollItem };