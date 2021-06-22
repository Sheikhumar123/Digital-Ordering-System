import {createContext} from 'react';

let categoryContext = createContext('all');

export default categoryContext;

// this context is made to check which category is selected from menu by default 'all'