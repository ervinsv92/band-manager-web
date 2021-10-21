import { fetchSinToken, fetchConToken } from "../helpers/fetch";
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
});

export const saveBand = (band)=>{
    return async(dispatch)=>{
        try {
            const resp = await fetchConToken(`bands/${band.id}`, {
                id:band.id,
                name:band.name,
                biography:band.biography
            }, 'PUT');

            dispatch(bandLoadAPI());
            //const body = await resp.json();    
        } catch (error) {
            console.log(error);
        }
    }
}