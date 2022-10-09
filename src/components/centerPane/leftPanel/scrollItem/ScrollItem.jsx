import styled from 'styled-components';
import { AddDeleteButton } from '../../../common/AddDeleteButton';
import { scrollItemViewModel } from './ScrollItemViewModel';
import { PageContext } from '../../../../store/page-context';
import { useContext } from 'react';

const Container = styled.div`
    display: grid;
    justify-content: center;
    padding: 6px 4px 0px;
    margin-bottom: 10px;

    img {
        width: 130px;
        height: 100px;
        object-fit: cover;
        border-radius: 5px;
        border: lightblue solid 1px;
        margin: 0 auto;
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
        margin-top: 4px;
    }

    .add-delete-buttons button:first-child {
        margin-right: 5px;
    }

    .add-delete-buttons button {
            width: 35px;
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
            margin-top: 0px;
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
    const { title, price, img, menuType, description } = props;
    const { selectMenuItem } = scrollItemViewModel(props);
    
    const ctx = useContext(PageContext);
    console.log('scroll');

    const data = { title, price, img, menuType, description }

    const a = () => {
        ctx.setState(data);
        console.log('scroll a a a a a', ctx);
    };

    return (
        <Container>
            {/* <img src={img} onClick={selectMenuItem}></img> */}
            <img src={img} onClick={a}></img>
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