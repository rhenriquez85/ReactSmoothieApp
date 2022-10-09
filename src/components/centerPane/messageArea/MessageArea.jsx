import styled from 'styled-components';
import { AddDeleteButton } from '../../common/AddDeleteButton';
import { PageContext } from '../../../store/page-context';
import { useContext, useState, useEffect } from 'react';

const Container = styled.div`
    display: grid;
    grid-template-rows: 70% 10% 20%;
    justify-content: center;
    margin: 20px 25px;
    font-weight: 500;

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

    .priceline span {
        color: darkred;
        font-weight: bold;
    }

    @media (pointer:coarse), (pointer:none), (max-width:800px) {
        grid-template-rows: 65% 10% 25%;
        font-size: 3vw;
        margin: 3vw;
        font-weight: bold;

        img {
            width: 45vw;
            height: 55vw;
            margin: 0 auto;
        }
    }
`;

const MessageArea = () => {
    const ctx = useContext(PageContext);
    const { title, price, img, description } = ctx.state;
    const priceline = <div><span>{title}</span> ${price}</div>;

    console.log('msgarea', ctx);

    return (
        <Container>
            <img src={img} />
            <div className='priceline'>
                {priceline}
                <AddDeleteButton sign='+' caption='Add To Order' />
            </div>
            <div>{description}</div>
        </Container>
    );
};

export { MessageArea };