import React from 'react';
import ShowRegistrationForm from './Forms/ShowRegistrationForm';


/**
 * component for returning user registration form
 */
const RegisterPage=()=>{

   

    return(
        <div className="container">
            <div className="row px-3 py-5 mh-100 ">
                <div className="col-md-6  mx-auto align-self-center">
                   <ShowRegistrationForm/> 
                   
                </div>
            </div>
            
        </div>
    )
}

export default RegisterPage;