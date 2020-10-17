import React from 'react';
import {Link} from 'react-router-dom';



const HomePage=()=>{

    return(
        <div className="header container-fluid mx-0 vh-80 " >
            <div className="Jumbotron bg-success  text-center text-white py-3 px-3  h-100">
            <h1 className="display-5 pt-5">VegOnline Store...</h1>
            <p>Your biggest online market for fresh and organic Vegetables...</p>
            <Link className="btn btn-warning text-white btn-lg mt-5 mb-4" to="/login" role="button">Sell Now</Link>
            
        </div>
        <div className="container mt-3 text-center text-secondary">
            <h2>App products here</h2>
        </div>
        <div className="row text-center mt-3">
            <div className="col-md-3 ">
                Product 1
            </div>
            <div className="col-md-3">
                Product 1
            </div>
            <div className="col-md-3">
                Product 1
            </div>
            <div className="col-md-3">
                Product 1
            </div>
            <div className="col-md-3">
                Product 1
            </div>
            <div className="col-md-3">
                Product 1
            </div>
            <div className="col-md-3">
                Product 1
            </div>
            <div className="col-md-3">
                Product 1
            </div>

        </div>
         
        </div>
        
    )
}

export default HomePage;