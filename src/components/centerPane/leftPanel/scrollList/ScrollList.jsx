import styled from 'styled-components';
import { ScrollItem } from '../scrollItem/ScrollItem';
import bites from '../../../../images/bites/quesadilla.jpg';
import smoothie from '../../../../images/smoothies/rainbow.jpg'


const StyledList = styled.ul`
    list-style-type: none;
    /* background-color: #c00101; */
    background-color: darkred;
    width: 75%;
    margin: auto;
    padding: 10px 10px;
    border-radius: 10px;

    /* li {
        margin: 0px;
        padding: 0px;
    } */

    @media (pointer:coarse), (pointer:none), (max-width: 800px) {
        /* width: 65%; */
        /* width: 20vw; */
    }
`;

const ScrollList = () => {
    let listData = [];
    listData = [
        { title: 'Smoothie 1', price: 10, img: smoothie},
        { title: 'Bite 1', price: 12, img: bites},
        { title: 'Combo 1', price: 18, img: ' '},
    ]

    const listItems = [];
    listData.forEach((data) => {
        // listItems.push(<li key={data.title}>{ScrollItem(data)}</li>);
        listItems.push(ScrollItem(data));
    });

    return (
        <StyledList>
            {listItems}
        </StyledList>
    );
};

export { ScrollList };