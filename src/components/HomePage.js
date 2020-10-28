import React from 'react';
import {Link} from 'react-router-dom';
import Layout from './Layout';
import ShowProduct from '../components/Dashboard/getProduct';



const HomePage=()=>{

    return(

        <div className="header container-fluid mx-0 vh-80 " >
            <div className="Jumbotron bg-success  text-center text-white py-3 px-3  h-100">
            <h1 className="display-5 pt-5">VegOnline Store...</h1>
            <p>Your biggest online market for fresh and organic Vegetables...</p>
            <Link className="btn btn-warning text-white btn-lg mt-5 mb-4 mx-2" to="/login" role="button">Sell Now</Link>
            <Link className="btn btn-warning text-white btn-lg mt-5 mb-4 mx-2" to="product/getProduct" role="button">View Products</Link>
            
        </div>
        <div className="container mt-3 text-center text-secondary">
            <h2>App products here</h2>
        </div>
       
<ShowProduct/>
        
         
        </div>
       
    )
}

export default HomePage;

/**
 *  
        
 */