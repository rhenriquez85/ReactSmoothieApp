import React from 'react';
import { useState } from 'react';
import dataController from '../controllers/dataController';

const defaultContext = { 
    state: {},
    setState: () => {},
 };

const PageContext = React.createContext(defaultContext);

const PageContextProvider = (props) => {
    const [state, setState] = useState(dataController.getData()[0]);
    console.log('page-context');

    return (
        <PageContext.Provider value={{ state, setState }}>
            {props.children}
        </PageContext.Provider>
    );
};

export { PageContextProvider, PageContext };