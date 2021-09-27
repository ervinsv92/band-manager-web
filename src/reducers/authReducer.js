import { types } from "../types/types";

const initialState = {
    isLogued:false,
    name:''
}

export const authReducer = (state = initialState, action) =>{
    switch (action.type) {
    
        case types.authLogin:
            return {
                ...state,
                isLogued:true,
                ...action.payload
            }
        case types.authLogout:
            return {
                ...initialState
            }
        default:
            return state;
    }
}