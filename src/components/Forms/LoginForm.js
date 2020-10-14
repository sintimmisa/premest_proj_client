import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import ErrorMsg from '../Alerts/errorMsg';
import Loading from '../Loading/loading';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import Login from '../../auth/Login';


const LoginForm =()=>{
     /**
     * UseState hooks to manage components state
     * @params {inputValue }  handle initialState
     * @params {setInputValue} handle new state
     * 
     * Destracture initalS  state and assign to inputValue
     */

     const [inputValue,setInputValue] = useState({
         email:'',
         password:'',
         loading:false,
         errorMsg:false,
         redirect:false
     });

     const {
         email,
         password,
         loading,
         errorMsg,
         redirect
     } = inputValue


     const handleChange=(evt)=>{

          //destructure to allow use of name and value without evt.target
          const {name,value}=evt.target;

        //Update states
          setInputValue({
              ...inputValue,
              [name]:value,
              errorMsg:'',
              loading:false
          });
         
      }
       /**
        * onSubmit Evt Handler
        * @param {*} evt 
        */
      const handleSubmit=(evt)=>{
          evt.preventDefault();
          console.log(inputValue);

           /**
           * form validaion
           * if all field are empty return update state and set errorMsg */

         if(isEmpty(email) || isEmpty(password)){
              setInputValue({
                  ...inputValue, errorMsg:"All fields are required."
              })

          }else if (!isEmail(email)){
              setInputValue({
                  ...inputValue, errorMsg:"Email is Invalid!."
              })

          }else{
              /**
               * On Success
               * @get relevant data {username,email,password}
               * @set loading {true}
               */

               const {email,password}=inputValue;
               const data ={email,password};

              setInputValue({
                  ...inputValue, loading:true
              }); 

              Login(data);

         
        }
    }
    return(
       <div className="container">
           
        {loading && Loading()} 
            <form className="login-form" onSubmit={handleSubmit} noValidate>
            

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
            
            <div className="form-group ">
                
                <button name=""className="btn btn-primary btn-block" placeholder="Username" type="submit"> Login</button>
            </div> 
            <p className="text-center "> Don't have an account? <Link to ="/register">Register Here</Link></p>
                

        </form>
       
       </div>
    )
}

export default LoginForm;