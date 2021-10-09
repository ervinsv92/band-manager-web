import { types } from "../types/types";

const initialState = {
    events:[
    /*{
        id:0,
        startDate:0,
        name:'',
        location:'',
        linkBuy:'',
        state:true
    }*/
]}

export const eventReducer = (state = initialState, action) =>{
    switch (action.type) {
    
        case types.eventLoad:
            return {
                ...state,
                events:action.payload
            }
        default:
            return state;
    }
}