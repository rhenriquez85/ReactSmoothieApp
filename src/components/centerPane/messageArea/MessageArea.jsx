import styled from 'styled-components';

import image from '../../../images/smoothies/rainbow.jpg';

const Container = styled.div`
    display: grid;
    /* width: 90%; */
    grid-template-rows: 60% 10% 30%;
    justify-content: center;
    /* min-width: 0; */
        /* min-height: 0; */

    .message-area-img-container {
        width: 90%;
        display: absolute;
        margin: auto;
    }

    img {
        display: relative;
        /* display: inline-block; */
        width: 350px;
        height: 250px;
        /* margin: 20px 0px; */
        object-fit: cover;
        /* max-width: 350px; */
        /* max-height: 250px; */
        /* overflow: none; */
    }

    /* .message-area-img { */
`;

const MessageArea = () => {

    return (
        <Container>
            {/* <div className='message-area-img-container'> */}
            <img src={image} />
            {/* </div> */}
            <div>1</div>
            <div>2</div>
        </Container>
    );
};

export { MessageArea };