import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarAdmin } from './NavbarAdmin'

export const MenuAdminPage = () => {
    return (
        <div>
            <NavbarAdmin />
            <Link to='/admin/band'>Band</Link>
            <br/>
            <Link to='/admin/albums'>Albums</Link>
            <br/>
            <Link to='/admin/events'>Events</Link>
            <br/>
            <Link to='/admin/members'>Members</Link>
            <br/>
        </div>
    )
}
