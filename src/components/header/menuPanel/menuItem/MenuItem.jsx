import styled from 'styled-components';

const Item = styled.div`
    font-weight: bolder;
    color: darkblue;
    font-family: 'Trebuchet MS', sans-serif;
    a:hover {
        color: #c00101;
        cursor: pointer;
    }
`;

const MenuItem = (props) => {
    const { itemName, itemSrc } = props;

    return (
        <Item>
            <a src={itemSrc}>{itemName}</a>
        </Item>
    );
};

export { MenuItem };