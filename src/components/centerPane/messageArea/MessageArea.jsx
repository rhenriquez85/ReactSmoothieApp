import styled from 'styled-components';
import { AddDeleteButton } from '../../common/AddDeleteButton';

import image from '../../../images/smoothies/rainbow.jpg';

const Container = styled.div`
    display: grid;
    grid-template-rows: 70% 10% 20%;
    justify-content: center;
    /* padding: 20px 25px; */
    margin: 20px 25px;

    img {
        width: 350px;
        height: 250px;
        /* object-fit: cover; */
        object-fit: contain;
    }
    
    .priceline {
        display: flex;
        justify-content: space-between;
    }

    @media (pointer:coarse), (pointer:none), (max-width:800px) {
        grid-template-rows: 65% 10% 25%;
        font-size: 3vw;
        margin: 3vw;
        font-weight: bold;

        img {
            width: 45vw;
            height: 55vw;
            /* margin: auto; */
            margin: 0 auto;
        }
    }
`;

const MessageArea = () => {
    const title = 'Rainbow Road';
    const price = 10;
    const priceline = `${title} $${price}`;
    const description = 'A delicious treat made with strawberry, mango, banana, kiwi and dragon fruit. Enjoy all the flavors of the rainbow!';

    return (
        <Container>
            <img src={image} />
            <div className='priceline'>
                {priceline}
                <AddDeleteButton sign='+' caption='Add To Order' />
            </div>
            <div>{description}</div>
        </Container>
    );
};

export { MessageArea };