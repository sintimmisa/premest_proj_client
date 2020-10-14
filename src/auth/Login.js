import axios from 'axios';

/**
 * When Registration is successfull return data from server
 * @param {email,password} data 
 * @request data from api with axios
 */

const Login= async(data)=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const response= await axios.post('/api/auth/login',data, config);


    return response
    
    


}
export default Login;