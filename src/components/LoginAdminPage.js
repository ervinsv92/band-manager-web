import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogin } from '../actions/auth';
import { useForm } from '../hooks/useForm';

const initForm = {
    user:'',
    password:''
}

export const LoginAdminPage = () => {

    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm(initForm);
    const {user, password} = formValues;

    const handleLogin = (e)=>{
        e.preventDefault();
        dispatch(startLogin(user, password));
    }

    return (
        <form onSubmit={handleLogin}>
            <input placeholder="Usuario" name="user" value={user} onChange={handleInputChange}/>
            <br/>
            <input placeholder="Clave" type="password" name="password" value={password} onChange={handleInputChange}/>
            <br/>
            <button>Ingresar</button>
        </form>
    )
}
