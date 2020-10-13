import React from 'react';
import LoginForm from './Forms/LoginForm';


/**
 * component for returning user registration form
 */
const LoginPage=()=>{

   

    return(
        <div className="container">
            <div className="row px-3 py-5 mh-100 ">
                <div className="col-md-6  mx-auto align-self-center">
                   <LoginForm/> 
                   
                </div>
            </div>
            
        </div>
    )
}

export default LoginPage;