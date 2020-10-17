import axios from 'axios';

/**
 * When Registration is successfull return data from server
 * @param {email,password} data 
 * @request data from api with axios
 */

const  createCategory= async(data)=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const response= await axios.post('/api/category',data, config);


    return response
    
    


}
export default createCategory;