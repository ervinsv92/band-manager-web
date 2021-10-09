import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { bandReducer } from './bandReducer';
import { eventReducer } from './eventReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    band: bandReducer,
    event:eventReducer
});