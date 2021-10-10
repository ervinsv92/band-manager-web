import { fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";

export const membersLoadAPI = ()=>{
    return async(dispatch)=>{
        const resp = await fetchSinToken(`members`);
        const body = await resp.json();
        
        if(body){
            dispatch(membersLoad(body));
        }else{
            console.log('No hay último album para mostrar');
        }
    }
}

const membersLoad = (members)=>({
    type:types.membersLoad,
    payload:members
})