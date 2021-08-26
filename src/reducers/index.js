import {combineReducers} from 'redux';
import poemsReducers from './poemsReducer';
import quotesReducer from './quotesReducer';
import adviceReducer from './adviceReducer';

const rootReducers = combineReducers ({
    poems: poemsReducers,
    quotes: quotesReducer,
    advice: adviceReducer,
});

export default rootReducers;