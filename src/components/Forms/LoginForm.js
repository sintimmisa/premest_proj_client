import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import ErrorMsg from '../Alerts/errorMsg';
import Loading from '../Loading/loading';


const LoginForm =()=>{
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
         loading:false,
         errorMsg:false,
         redirect:false
     });

     const {
         username,
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
        
         
        }
    return(
       <div className="container">
           
       
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
            <p className="text-center "> Don't have an account? <Link to ="/login">Register Here</Link></p>
                

        </form>
       
       </div>
    )
}

export default LoginForm;