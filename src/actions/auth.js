import Swal from "sweetalert2";
import { fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";

export const startLogin = (user, password)=>{
    return async(dispatch)=>{
        const resp = await fetchSinToken('auth', {user, password}, 'POST');
        const body = await resp.json();
        console.log(resp)
        if(body.ok){
            localStorage.setItem('token', body.jwt);

            dispatch(login({
                name:body.user.username
            }))
        }else{
            Swal.fire('Error', body.message[0].messages[0].message, 'error');
        }
    }
}

const login = (user)=>({
    type:types.authLogin,
    payload:user
});

export const startLogout = () =>{
    return (dispatch)=>{
        localStorage.clear();
        dispatch(logout());
    }
}

const logout =()=> ({
    type:types.authLogout
});