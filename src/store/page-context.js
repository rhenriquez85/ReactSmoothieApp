import React from 'react';
import dataController from '../controllers/dataController';

const defaultContext = { 
    data: { ...dataController.getData()[0] },
 };

const PageContext = React.createContext();

export { PageContext, defaultContext };