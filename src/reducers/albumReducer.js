import { types } from "../types/types";

const initialState = {
    albums:[
    /*{
        id:0,
        name:'',
        year:0,
        state:true,
        imageCover:{url:''},
        tracks:[{
            id:0,
            number:0,
            name:'',
            album:0
        }]
    }*/
    ],
    lastAlbum:null
}

export const albumReducer = (state = initialState, action) =>{
    switch (action.type) {
    
        case types.albumLastLoad:
            return {
                ...state,
                lastAlbum:action.payload
            }
        case types.albumsLoad:
            return {
                ...state,
                albums:action.payload
            }
        default:
            return state;
    }
}