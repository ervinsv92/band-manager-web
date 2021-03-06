const baseUrl = process.env.REACT_APP_API_URL;

const fetchSinToken = (endpoint, data, method = 'GET')=>{
    const url = `${baseUrl}/${endpoint}`;
    console.log(url)
    
    if(method === 'GET'){
        return fetch(url);
    }else{
        return fetch(url, {
            method,
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
    }
}

const fetchConToken = (endpoint, data, method = 'GET')=>{
    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || '';
    
    if(method === 'GET'){
        return fetch(url,{
            method,
            headers:{
                'Authorization': `bearer ${token}`
            }
        });
    }else{
        return fetch(url, {
            method,
            headers:{
                'Content-Type':'application/json',
                'Authorization': `bearer ${token}`
            },
            body:JSON.stringify(data)
        })
    }
}

const fetchConTokenFile = (endpoint, data, method = 'POST')=>{
    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || '';
    console.log(data)
    return fetch(url, {
        method,
        headers:{
            'mimeType': 'multipart/form-data',
            'Authorization': `bearer ${token}`
        },
        body:data 
    })
}

export {
    fetchSinToken,
    fetchConToken,
    fetchConTokenFile
}