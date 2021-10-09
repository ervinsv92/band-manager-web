import { fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";

export const eventLoadAPI = (limit=false)=>{
    return async(dispatch)=>{
        const resp = await fetchSinToken(`events${limit?'?_limit=2':''}`);
        const body = await resp.json();
        
        if(body){
            dispatch(eventLoad(body));
        }else{
            console.log('No hay eventos para mostrar');
        }
    }
}

const eventLoad = (band)=>({
    type:types.eventLoad,
    payload:band
})