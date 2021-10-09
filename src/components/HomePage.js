import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bandLoadAPI } from '../actions/band';
import { eventLoadAPI } from '../actions/event';
import { Navbar } from './Navbar';

export const HomePage = () => {

    const {name, baner} = useSelector(state => state.band);
    const {events} = useSelector(state => state.event);
    const urlBaner = baner?.formats?.large?.url | '';
    console.log(events)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(bandLoadAPI()); 
        dispatch(eventLoadAPI(true));
    }, [])

    return (
        <div>
            <h1>{name}</h1>
            <br />
            <img src={baner.url}/>  
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
            <br/>
            <h2>Ultimo album</h2>

        </div>
    )
}
