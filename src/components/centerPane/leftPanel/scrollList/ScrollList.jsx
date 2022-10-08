import styled from 'styled-components';
import { ScrollItem } from '../scrollItem/ScrollItem';
import bites from '../../../../images/bites/quesadilla.jpg';
import smoothie from '../../../../images/smoothies/rainbow.jpg'


const StyledList = styled.ul`
    list-style-type: none;
    background-color: darkred;
    width: 75%;
    margin: auto;
    padding: 10px 10px;
    border-radius: 10px;

    @media (pointer:coarse), (pointer:none), (max-width: 800px) {
        width: 12vw;
        padding: 2vw 2vw 0;
        margin-bottom: 2vh;
    }
`;

const ScrollList = () => {
    let listData = [];
    listData = [
        { title: 'Rainbow Road', price: 10, img: smoothie},
        { title: 'Quesadilla Quartet', price: 12, img: bites},
        { title: 'Combo 1', price: 18, img: ' '},
    ]

    const listItems = [];
    listData.forEach((data) => {
        listItems.push(<li key={data.title}>{ScrollItem(data)}</li>);
        // listItems.push(ScrollItem(data));
    });

    return (
        <StyledList>
            {listItems}
        </StyledList>
    );
};

export { ScrollList };