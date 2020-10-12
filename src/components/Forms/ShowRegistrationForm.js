import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import equals from 'validator/lib/equals';
import ErrorMsg from '../Alerts/errorMsg';
import SuccessMsg from '../Alerts/successMsg';
//import Swal from 'sweetalert2'


const ShowRegistrationForm =()=>{
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

     /**
      * Destracture state
      * add name and value alt to input form
      * @example name= {username} , value={username}
      */
     const {
         username,email,password,password2,loading,successMsg,errorMsg
     }=formData;






     /**
      * Event Handler to handdle changes in the text field
      * @param event obj {evt}
      * @returns setFormData to update state
      * @Use target property in evt obj to get name:"value"
      * 
      */

      const handleChange=(evt)=>{

          //destructure to allow use of name and value without evt.target
          const {name,value}=evt.target;

        //Update states
          setFormData({
              ...formData,
              [name]:value,
              //reset  error and successs msg
              successMsg:'',
              errorMsg:''
          });
          //Check if event handler works
          //console.log(formData);

      }

      /**
       * Event Handler to handle form submission
       * @params evt
       *  add evt.preventDefault behavour to reload form on submit
       *  Add client side validation with validator{equals,isEmail and isEmpty}
       */
      const handleSubmit=(evt)=>{
          evt.preventDefault();
          console.log(formData);
        
          /**
           * form validaion
           * if all field are empty return update state and set errorMsg */

         if(isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(password2)){
              setFormData({
                  ...formData, errorMsg:"All fields are required."
              })

          }else if (!isEmail(email)){
              setFormData({
                  ...formData, errorMsg:"Email is Invalid!."
              })

          }else if(!equals(password,password2)){
              setFormData({
                  ...formData, errorMsg:"Password do not match!."
              })
          }else{
              //Success 
              setFormData({
                  ...formData, successMsg:"Account Succesffully Created."
              });
          }


      }
    

    return(
       <div className="container"> 
       {errorMsg && ErrorMsg(errorMsg)}
       {successMsg && SuccessMsg(successMsg)}
            <form className="registration-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fa fa-user"></i>
                    </span>
                </div>
                <input name="username" value={username} className="form-control" placeholder="Username" type="text" onChange={handleChange}/>
            </div>

            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fa fa-envelope"></i>
                    </span>
                </div>
                <input name="email" value={email} className="form-control" placeholder="Email" type="email" onChange={handleChange}/>
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fa fa-lock"></i>
                    </span>
                </div>
                <input name="password" value={password} className="form-control" placeholder="Password" type="password" onChange={handleChange}/>
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fa fa-lock"></i>
                    </span>
                </div>
                <input name="password2" value={password2} className="form-control" placeholder="Confirm Password" type="password" onChange={handleChange}/>
            </div>
            <div className="form-group ">
                
                <button name=""className="btn btn-primary btn-block" placeholder="Username" type="s   ubmit"> Register</button>
            </div> 
            <p className="text-center ">Already Registered? <Link to ="/login">Login</Link></p>
                

        </form>
        {/**Test is states is workig */}
                   {JSON.stringify(formData)}
       </div>
            
       
        
    );
};

export default ShowRegistrationForm;