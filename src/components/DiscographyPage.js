import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { albumsLoadAPI } from '../actions/album';
import { Navbar } from './Navbar';

export const DiscographyPage = () => {
    const urlBase = process.env.REACT_APP_API_URL;
    const dispatch = useDispatch();
    const {albums} = useSelector(state => state.album);

    useEffect(() => {
        dispatch(albumsLoadAPI());
    }, [dispatch])

    return (
        <div>
            <Navbar/>
            <h1>Discography</h1>
            
            {
                (albums.length ===0)&& (
                    <div>
                        <hr />
                        <p>No hay albums para mostrar</p>
                    </div>
                    
                )
            }

            {
                (albums.length > 0)&&
                albums.map(album=>(
                    <div key={album.id}>
                        <hr />
                        <label>{album.name} ({album.year})</label>
                        <br />
                        <img src={urlBase + album.imageCover.url} width="50px"/>
                        <br/>
                        <label>Canciones</label>
                        <ul>
                            {
                                album.tracks.map(track=>(
                                    <li key={track.id}>{track.number} - {track.name}</li>
                                ))   
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}
