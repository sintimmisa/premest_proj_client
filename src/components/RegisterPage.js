import React from 'react';
import ShowRegistrationForm from './Forms/ShowRegistrationForm';



const RegisterPage=()=>{

    

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