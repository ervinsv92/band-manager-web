import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bandLoadAPI, saveBand } from '../actions/band';
import { useForm } from '../hooks/useForm';
import { NavbarAdmin } from './NavbarAdmin'

const initForm = {
    name:'',
    biography:''
}

export const BandAdminPage = () => {
    const dispatch = useDispatch();
    const band = useSelector(state => state.band);
    const [formValues, handleInputChange, reset] = useForm(initForm);
    const {name, biography} = formValues;

    const handleSubmit = (e)=>{
        e.preventDefault();
        let file = document.getElementById("fBaner").files[0];
        let fileUpload = null;
        if(file){
            fileUpload = file;
        }

        dispatch(saveBand({
            id:band.id,
            name, 
            biography
        }, fileUpload));
    }

    useEffect(() => {
        reset({name:band.name, biography:band.biography});
    }, [band])

    useEffect(() => {
        dispatch(bandLoadAPI());
    }, []);

    return (
        <div>
            <NavbarAdmin />
            <h1>Band Admin</h1>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="name" value={name} onChange={handleInputChange}/>
                <br/>
                <textarea name="biography" placeholder="biography" value={biography} onChange={handleInputChange}/>
                <br/>
                <label>Baner</label>
                <input id="fBaner" type="file" />
                <br/>
                <button>Guardar</button>
            </form>
        </div>
    )
}
