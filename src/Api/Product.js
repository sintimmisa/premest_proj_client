import axios from 'axios';

/**
 * create prod 
 */

const  createProduct= async(data)=>{
    
    const response= await axios.post('/api/product',data);


    return response
}
    export default createProduct;

