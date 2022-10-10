import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { MenuContext } from '../../../../store/menu-context';
import { PageContext } from '../../../../store/page-context';
import { menuItemViewModel } from './MenuItemViewModel';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Item = styled.div`
    font-weight: bolder;
    color: darkblue;
    font-family: 'Trebuchet MS', sans-serif;
    a:hover {
        color: #c00101;
        cursor: pointer;
    }

    a:visited, a:link {
        color: darkblue;
    }

    a {
        text-decoration: none;
    }
`;

const MenuItem = (props) => {
    const { itemName, itemSrc } = props;
    const menuCtx = useContext(MenuContext);
    const pageCtx = useContext(PageContext);
    const location = useLocation();
    const { updateMenu } = menuItemViewModel(props, { menuCtx, pageCtx });

    useEffect(() => {
        const name = location.pathname.substring(1);
        updateMenu(name.charAt(0).toUpperCase() + name.substring(1));
    }, [location.pathname]);

    return (
        <Item>
            <Link to={itemName.toLowerCase()}>
                <span src={itemSrc} onClick={updateMenu}>{itemName}</span>
            </Link>
        </Item>
    );
};

export { MenuItem };