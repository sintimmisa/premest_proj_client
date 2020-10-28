import axios from 'axios';

/**
 * create prod 
 */

export const  createProduct= async(data)=>{
    
    const response= await axios.post('/api/product',data);


    return response;
}
 
//get product list

export const getAllProduct =async(data)=>{
    const response= await axios.get('/api/product', data);
    return response;
}

/*
export const createProduct= (userId,token,product)=>{
    return fetch(`/api/product/${userId}`,{
        method:'POST',
        headers:{
            Accept:'application/json',
            
            Authorization:`Bearer ${token}`
        },
        body:product
    })
    .then((response)=>{
        return response.json();
    })
    .catch((err)=>{
        console.log(err);
    })
    
}*/
