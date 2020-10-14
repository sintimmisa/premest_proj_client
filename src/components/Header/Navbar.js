 
 import React from 'react';
 import {Link,withRouter} from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth';
 
 
 
const Navbar=()=>{

     return(
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <Link className="navbar-brand" to="/">VegOnline Store</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    {!isAuthenticated() &&(
                        <div>
                            <li className="nav-item ">
                        <Link className="nav-link" to="">Home <span className="sr-only"></span></Link>
                    </li>
                            <li className="nav-item ">
                        <Link className="nav-link" to="/register">Register <span className="sr-only"></span></Link>
                    </li>
                            <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
     
                        </div>
                    )}
                     {isAuthenticated() && isAuthenticated().role===1 &&(
                        <div>
                            <li className="nav-item ">
                        <Link className="nav-link" to="/admin/dashboard">Dashboard<span className="sr-only"></span></Link>
                    </li>
                          
                        </div>
                    )}
                      {isAuthenticated() && isAuthenticated().role===0 &&(
                        <div>
                            <li className="nav-item ">
                        <Link className="nav-link" to="/user/dashboard">Dashboard<span className="sr-only"></span></Link>
                    </li>
                          
                        </div>
                    )}

                     {isAuthenticated() &&(
                        <div>
                            <li className="nav-item ">
                        <Link className="nav-link" to="/user/logout">Logout<span className="sr-only"></span></Link>
                    </li>
                          
                        </div>
                    )}
                     
                </ul>
   
            </div>
            </div>
        </nav>
     );
        
    };
    export default withRouter(Navbar);
