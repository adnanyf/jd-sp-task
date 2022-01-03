import { combineReducers } from 'redux';
import { chuckReducer } from './Chuck/reducer';
import { neverEndingReducer } from './NeverEnding/reducer';

export const combinedReducers = combineReducers({
    chuck: chuckReducer,
    neverEnding: neverEndingReducer
});