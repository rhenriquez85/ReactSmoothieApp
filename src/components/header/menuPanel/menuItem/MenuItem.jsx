import { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from '../../../../store/menu-context';
import { menuItemViewModel } from './MenuItemViewModel';

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
    const menuCtx = useContext(MenuContext);
    const { updateMenu } = menuItemViewModel(props, { menuCtx });

    return (
        <Item>
            <a src={itemSrc} onClick={updateMenu}>{itemName}</a>
        </Item>
    );
};

export { MenuItem };