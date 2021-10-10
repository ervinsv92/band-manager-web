import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { membersLoadAPI } from '../actions/member';
import { Navbar } from './Navbar';

export const MembersPage = () => {
    const urlBase = process.env.REACT_APP_API_URL;
    const dispatch = useDispatch();
    const {members} = useSelector(state => state.member);

    useEffect(() => {
        dispatch(membersLoadAPI());
    }, [dispatch])

    return (
        <div>
            <Navbar />
            <h1>Members</h1>
            {
                (members.length === 0) &&
                (
                    <div>
                        <hr/>
                        <p>No hay integrantes para mostrar.</p>
                    </div>
                    
                )
            }

            {
                (members.length > 0) && 
                members.map(member=>(
                    <div key={member.id}>
                        <hr />
                        <label>{member.name} ({member.rol})</label>
                        <br/>
                        <img src={urlBase + member.image.url} width="100px"/>
                    </div>
                ))
            }
        </div>
    )
}
