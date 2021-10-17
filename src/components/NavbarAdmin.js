import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogout } from '../actions/auth';

export const NavbarAdmin = () => {
    const dispatch = useDispatch();
    const handleLogout = (e)=>{
        dispatch(startLogout());
    }
    return (
        <div>
            <Link to='/admin/menu'>Menu</Link>
            <Link to='/admin/band'>Band</Link>
            <Link to='/admin/albums'>Albums</Link>
            <Link to='/admin/events'>Events</Link>
            <Link to='/admin/members'>Members</Link>
            <button type="button" onClick={handleLogout}>Salir</button>
        </div>
    )
}
