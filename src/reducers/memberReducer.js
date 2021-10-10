import { types } from "../types/types";

const initialState = {
    members:[
    /*{
        id:0,
        name:'',
        rol:0,
        state:true,
        image:{url:''}
    }*/
    ]
}

export const memberReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.membersLoad:
            return {
                ...state,
                members:action.payload
            }
        default:
            return state;
    }
}