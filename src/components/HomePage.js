import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { albumLastLoadAPI } from '../actions/album';
import { bandLoadAPI } from '../actions/band';
import { eventLoadAPI } from '../actions/event';
import { Navbar } from './Navbar';

export const HomePage = () => {

    const urlBase = process.env.REACT_APP_API_URL;
    const {name, baner} = useSelector(state => state.band);
    const {events} = useSelector(state => state.event);
    const {lastAlbum} = useSelector(state => state.album);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(bandLoadAPI()); 
        dispatch(eventLoadAPI(true));
        dispatch(albumLastLoadAPI());
    }, [])

    return (
        <div>
            <h1>{name}</h1>
            <br />
            <img src={urlBase + baner.url}/>  
            <Navbar/>
            <br />
            <h2>Events</h2>
            <ul>
                {
                    (events) &&
                    events.map(event=>
                        (<li key={event.id}>{event.name} - {event.location} - {event.startDate} - Link: {event.linkBuy}</li>)
                    )
                }
            </ul>
            <a>Ver mas...</a>
            
            {
                (lastAlbum) &&
                <div>
                    <br/>
                    <h2>Último album</h2>
                    <h3>{lastAlbum.name} ({lastAlbum.year})</h3>
                    <img src={urlBase + lastAlbum.imageCover.url}/>
                </div>
            }
            
        </div>
    )
}
