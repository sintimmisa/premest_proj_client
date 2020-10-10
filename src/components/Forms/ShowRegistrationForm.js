import React from 'react';
import {Link} from 'react-router-dom';


const ShowRegistrationForm =()=>{

    return(
       
            <form className="registration-form">
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fa fa-user"></i>
                    </span>
                </div>
                <input name=""className="form-control" placeholder="Username" type="text"/>
            </div>

            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fa fa-envelope"></i>
                    </span>
                </div>
                <input name=""className="form-control" placeholder="Email" type="email"/>
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fa fa-lock"></i>
                    </span>
                </div>
                <input name=""className="form-control" placeholder="Password" type="password"/>
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fa fa-lock"></i>
                    </span>
                </div>
                <input name=""className="form-control" placeholder="Confirm Password" type="password"/>
            </div>
            <div className="form-group ">
                
                <button name=""className="btn btn-primary btn-block" placeholder="Username" type="s   ubmit"> Register</button>
            </div> 
            <p className="text-center ">Already Registered? <Link to ="/login">Login</Link></p>

        </form>
       
        
    );
};

export default ShowRegistrationForm;