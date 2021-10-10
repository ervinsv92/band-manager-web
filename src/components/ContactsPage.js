import React from 'react'
import { useSelector } from 'react-redux';
import { Navbar } from './Navbar'

export const ContactsPage = () => {

    const {contacts} = useSelector(state => state.band);


    return (
        <div>
            <Navbar/>
            <h1>Contacts</h1>
            {
                (contacts.length === 0) &&
                (
                    <div>
                        <hr/>
                        <p>No hay contactos para mostrar.</p>
                    </div>
                )
            }

            {
                (contacts.length > 0) && 
                contacts.map(contact=>(
                    <div key={contact.id}>
                        <hr/>
                        <p>{contact.name} - {contact.email}</p>
                    </div>
                ))
            }
        </div>
    )
}
