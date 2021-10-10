import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar } from './Navbar';

export const BioPage = () => {
    const urlBase = process.env.REACT_APP_API_URL;
    const {biography, logo} = useSelector(state => state.band);

    return (
        <div>
            <Navbar/>
            <h1>Biography</h1>
            <hr/>
            <img src={urlBase+logo.url} width="100px"/>
            <p>{biography}</p>
        </div>
    )
}
