 
 import React, { Fragment } from 'react';
 import {Link,withRouter} from 'react-router-dom';
import { isAuthenticated, logout } from '../../utils/auth';
 
 
 
const Navbar=({history})=>{


    /**
     * Function to handle logout on click
     * @param {*} evt 
     * call logout function
     * make use of the history prop in withRouter
     */
    const handleLogout=(evt)=>{
        logout(()=>{
            history.push('/register');
            console.log("logout");
        })
        
    }

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
                        <Fragment>
                            <li className="nav-item ">
                        <Link className="nav-link" to="">Home <span className="sr-only"></span></Link>
                    </li>
                            <li className="nav-item ">
                        <Link className="nav-link" to="/register">Register <span className="sr-only"></span></Link>
                    </li>
                            <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
     
                        </Fragment>
                    )}
                     {isAuthenticated() && isAuthenticated().role===1 &&(
                        <Fragment>
                            <li className="nav-item ">
                        <Link className="nav-link" to="/admin/dashboard">Dashboard<span className="sr-only"></span></Link>
                    </li>
                          
                        </Fragment>
                    )}
                      {isAuthenticated() && isAuthenticated().role===0 &&(
                        <Fragment>
                            <li className="nav-item ">
                        <Link className="nav-link" to="/user/dashboard">Dashboard<span className="sr-only"></span></Link>
                    </li>
                          
                        </Fragment>
                    )}

                     {isAuthenticated() &&(
                        <Fragment>
                            <li className="nav-item ">
                        <button className=" btn btn-link pl-0 text-secondary text-decoration-none" type="button" onClick={handleLogout}>Logout<span className="sr-only"></span></button>
                    </li>
                          
                        </Fragment>
                    )}
                     
                </ul>
   
            </div>
            </div>
        </nav>
     );
        
    };
    export default withRouter(Navbar);
