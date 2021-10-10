import { combineReducers } from 'redux';
import { albumReducer } from './albumReducer';
import { authReducer } from './authReducer';
import { bandReducer } from './bandReducer';
import { eventReducer } from './eventReducer';
import { memberReducer } from './memberReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    band: bandReducer,
    event:eventReducer,
    album:albumReducer,
    member:memberReducer
});