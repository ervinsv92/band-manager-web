import { types } from "../types/types";

const initialState = {
    id:0,
    name:'',
    biography:'',
    logo:{},
    baner:{},
    social_medias:[],
    contacts:[]
}

export const bandReducer = (state = initialState, action) =>{
    switch (action.type) {
    
        case types.bandLoad:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}