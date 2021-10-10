import { fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";

export const albumsLoadAPI = ()=>{
    return async(dispatch)=>{
        const resp = await fetchSinToken(`albums`);
        const body = await resp.json();
        
        if(body){
            dispatch(albumsLoad(body));
        }else{
            console.log('No hay último album para mostrar');
        }
    }
}

const albumsLoad = (albums)=>({
    type:types.albumsLoad,
    payload:albums
})

export const albumLastLoadAPI = ()=>{
    return async(dispatch)=>{
        const resp = await fetchSinToken(`albums`);
        const body = await resp.json();
        console.log(body)
        
        if(body){
            
            const albumsOrdered = body.sort((a,b)=>{
                return b.year - a.year;
            });
            const lastAlbum = albumsOrdered[0];
            dispatch(albumLastLoad(lastAlbum));
        }else{
            console.log('No hay último album para mostrar');
        }
    }
}

const albumLastLoad = (album)=>({
    type:types.albumLastLoad,
    payload:album
})

