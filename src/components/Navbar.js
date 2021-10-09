import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <Link to='/bio'>Bio</Link>
            <Link to='/discography'>Discography</Link>
            <Link to='/members'>Members</Link>
            <Link to='/contacts'>Contacts</Link>
        </div>
    )
}
