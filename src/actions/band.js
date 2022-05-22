import { fetchSinToken, fetchConToken, fetchConTokenFile } from "../helpers/fetch";
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

export const saveBand = (band, banerImage = null)=>{
    return async(dispatch)=>{
        try {
            const resp = await fetchConToken(`bands/${band.id}`, {
                id:band.id,
                name:band.name,
                biography:band.biography
            }, 'PUT');

            if(banerImage){
                console.log(banerImage)
                const formData = new FormData()
                formData.append('files', banerImage)
                formData.append('ref', 'bands') // optional, you need it if you want to link the image to an entry
                formData.append('refId', band.id) // optional, you need it if you want to link the image to an entry
                formData.append('field', 'baner') // optional, you need it if you want to link the image to an entry

                await fetchConTokenFile(`upload`, formData, 'POST');

                //axios.post(`${STRAPI_BASE_URL}/upload`, formData)
            }

            dispatch(bandLoadAPI());
            //const body = await resp.json();    
        } catch (error) {
            console.log(error);
        }
    }
}