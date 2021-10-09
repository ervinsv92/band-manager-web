import { fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";

export const bandLoadAPI = ()=>{
    return async(dispatch)=>{
        const resp = await fetchSinToken('bands?_limit=1');
        const body = await resp.json();
        
        if(body){
            dispatch(bandLoad(body[0]));
        }else{
            console.log('No hay datos de la banda para mostrar');
        }
    }
}

const bandLoad = (band)=>({
    type:types.bandLoad,
    payload:band
})