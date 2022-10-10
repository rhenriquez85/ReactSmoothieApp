import React, { useState } from 'react';
import dataController from '../controllers/dataController';

const defaultContext = { 
    state: {},
    setState: () => {},
    getFirstItem: () => {},
 };

const PageContext = React.createContext(defaultContext);

const PageContextProvider = (props) => {
    const [state, setState] = useState(dataController.getData()[0]);
    console.log('page-context');

    const getFirstItem = (menuType) => {
        return dataController.getData(menuType)[0];
    };

    return (
        <PageContext.Provider value={{ state, setState, getFirstItem }}>
            {props.children}
        </PageContext.Provider>
    );
};

export { PageContextProvider, PageContext };