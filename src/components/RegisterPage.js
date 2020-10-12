import React,{useState} from 'react';
import ShowRegistrationForm from './Forms/ShowRegistrationForm';


/**
 * component for returning user registration form
 */
const RegisterPage=()=>{

    /**
     * UseState hooks to manage components state
     * @params {formData }  handle initialState
     * @params {setformData} handle new state
     * 
     * Destracture initalS  state and assign to formData
     */

     const [formData,setFormData] = useState({
         username:'',
         email:'',
         password:'',
         password2:'',
         loading:false,
         successMsg:false,
         errorMsg:false
     });

     //Destracture state
     const {
         username,email,password,password2,loading,successMsg,errorMsg
     }=formData;

    

    return(
        <div className="container">
            <div className="row px-3 vh-100">
                <div className="col-md-6  mx-auto align-self-center">
                   <ShowRegistrationForm/> 
                </div>
            </div>
            
        </div>
    )
}

export default RegisterPage;