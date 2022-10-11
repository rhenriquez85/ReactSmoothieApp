import { useState } from 'react'; 
import styled from 'styled-components';
import { checkoutViewModel } from './CheckoutViewModel';

const Container = styled.div`
    display: grid;
    grid-template-rows: 2fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    padding: 20px;

    div {
        padding: 0px;
        margin: 0px;
    }

    .thank-you-image {
        background-color: #a8dceda0;
    }

    .thank-you-image img {
        width: 100%;
        height: 175px;
        object-fit: contain;
        margin: 0 auto;
    }

    .hide {
        visibility: hidden;
    }

    .order-confirm {
        margin: auto;
    }

    .order-confirm button {
        font-size: 25px;
        width: 100px;
        margin: 0 10px;
    }

    @media (pointer:coarse), (pointer:none), (max-width:800px) {
        font-size: 5vw;

        .order-confirm button {
            font-size: 4.5vw;
            width: 15vw;
            padding: 0;
            margin: 0 0.5vw;
        }   
    }
`;

const Checkout = (props) => {
    const [checkout, setCheckout] = useState(false);
    const [wait, setWait] = useState(false);
    const hideImg = checkout ? '' : 'hide';
    const hideButton = checkout ? 'hide' : '';

    const { image, displayOrderLine, placeOrder, waitOrder } = checkoutViewModel(
        props, 
        {}, 
        { checkout, setCheckout, wait, setWait }
    );

    return (
        <Container>
            <div className={`thank-you-image ${hideImg}`}>
                <img src={image} />
            </div>
            <div className={`order-line `}>{displayOrderLine()}</div>
            <div className={`order-confirm ${hideButton}`}>
                <button onClick={placeOrder}>Yes</button>
                <button onClick={waitOrder}>No</button>
            </div>
        </Container>
    );
};

export { Checkout };


