import axios from 'axios';

/**
 * When Registration is successfull return data from server
 * @param {username,email,password} data 
 * @request data from api with axios
 */

const register= async(data)=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const responseData= await axios.post('/api/auth/register',data, config);


    return(
    {responseData}
    )


}
export default register;