import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import equals from 'validator/lib/equals';
import ErrorMsg from '../Alerts/errorMsg';
import SuccessMsg from '../Alerts/successMsg';
import Loading from '../Loading/loading';
import register from '../../auth/Register';//Http request for registration form
//import Swal from 'sweetalert2'


const ShowRegistrationForm =()=>{
     /**
     * UseState hooks to manage components state
     * @params {inputValue }  handle initialState
     * @params {setInputValue} handle new state
     * 
     * Destracture initalS  state and assign to inputValue
     */

     const [inputValue,setInputValue] = useState({
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
     }=inputValue;






     /**
      * Event Handler to handdle changes in the text field
      * @param event obj {evt}
      * @returns setInputValue to update state
      * @Use target property in evt obj to get name:"value"
      * 
      */

      const handleChange=(evt)=>{

          //destructure to allow use of name and value without evt.target
          const {name,value}=evt.target;

        //Update states
          setInputValue({
              ...inputValue,
              [name]:value,
              //reset  error and successs msg
              successMsg:'',
              errorMsg:'',
              loading:false
          });
          //Check if event handler works
          //console.log(inputValue);

      }

      /**
       * Event Handler to handle form submission
       * @params evt
       *  add evt.preventDefault behavour to reload form on submit
       *  Add client side validation with validator{equals,isEmail and isEmpty}
       */
      const handleSubmit=(evt)=>{
          evt.preventDefault();
          console.log(inputValue);
        
          /**
           * form validaion
           * if all field are empty return update state and set errorMsg */

         if(isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(password2)){
              setInputValue({
                  ...inputValue, errorMsg:"All fields are required."
              })

          }else if (!isEmail(email)){
              setInputValue({
                  ...inputValue, errorMsg:"Email is Invalid!."
              })

          }else if(!equals(password,password2)){
              setInputValue({
                  ...inputValue, errorMsg:"Password do not match!."
              })
          }else{
              /**
               * On Success
               * @get relevant data {username,email,password}
               * @set loading {true}
               * @set successMsg {Success}*/ 

               const {username,email,password}=inputValue;
               const data ={username,email,password};

              setInputValue({
                  ...inputValue, loading:true
              });

              register(data).then((res)=>{
                  console.log(res)

                   setInputValue({
                       username:'',
                        email:'',
                        password:'',
                        password2:'',
                        loading:false,
                        successMsg:res.data.successMessage
                        
                 
              });
              }).catch((err)=>{
                  console.log("Registration Error", err)
                  setInputValue({
                  ...inputValue, loading:false, errorMsg:"Account could not be created!"
              });

              })
          }


      }
    

    return(
       <div className="container">
           {loading && Loading()} 
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
                   {JSON.stringify(inputValue)}
       </div>
            
       
        
    );
};

export default ShowRegistrationForm;