import {combineReducers} from 'redux';
import poemsReducers from './poemsReducer';
import quotesReducer from './quotesReducer';
import adviceReducer from './adviceReducer';
import menuReducers from './menuReducers';

const rootReducers = combineReducers ({
    poems: poemsReducers,
    quotes: quotesReducer,
    advice: adviceReducer,
    menu: menuReducers,
});

export default rootReducers;