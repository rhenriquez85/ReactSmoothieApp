import React, { useState } from 'react';
import dataController from '../controllers/dataController';

const defaultContext = {
    menu: '',
    setCurrentMenu: () => {},
    getCurrentMenu: () => {},
    isMenuType: () => {},
    getMenuType: () => {},
}

const MenuContext = React.createContext(defaultContext);

const MenuContextProvider = (props) => {
    const [menu, setMenu] = useState('');

    const _getData = () => {
        return dataController.getData(menu);
    };

    const _getFavorites = () => {
        return dataController.getFavorites();
    }

    const _isMenuType = (menuType) => {
        return dataController.isMenuType(menuType);
    }

    const setCurrentMenu = (menuType) => {
        if (menuType.toLowerCase() === 'smoothies' || menuType.toLowerCase() === 'bites') 
            setMenu(menuType);
        else
            setMenu('');
    };

    const getCurrentMenu = () => {
         return !menu ? _getFavorites() : _getData();
    };

    const isMenuType = (menuType) => {
        return _isMenuType(menuType);
    };

    const getMenuType = () => {
        return menu || 'Favorites';
    }

    return (
        <MenuContext.Provider value={{ menu, setCurrentMenu, getCurrentMenu, isMenuType, getMenuType }}>
            {props.children}
        </MenuContext.Provider>
    );
};

export { MenuContextProvider, MenuContext };