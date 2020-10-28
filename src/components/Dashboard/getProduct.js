import React,{useState,useEffect} from  'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import errorMsg from '../Alerts/errorMsg';
import successMsg from '../Alerts/successMsg';
import loading from '../Loading/loading';


const ShowProduct =()=>{
    const [Products,setProducts]=useState([]);
    const [errMsg, setErrMsg] =useState("");
    const [succMsg, setSuccMsg]=useState("");
    const [load,setLoad]=useState(false);

   
    useEffect(() => {
        axios.post('/api/product/getProduct')
        .then(response=>{
              setLoad(true);
                setProducts(response.data.products);

                console.log(response.data.products)
                

          
        }).catch(err=>{
            console.log(err)
        })
       
    }, []);
    

const productCards= Products.map((product,index)=>{
    return(
        <div className="col-lg-3 col-md-4 col-sm-6 border border-secondary  m-k">
            <div className="card w-18rem" >
            <img src={`${product.ProdImg}`} alt='product'/>
            <div className="card-body">
            <h5 className="card-title">{product.prodTitle}</h5>
            <h6 className="card-subtitle mb-2 text-muted"> {`GHC ${product.prodPrice}`}</h6>
                <p className="card-text">{product.prodDesc}</p>
            <Link to="#" className="card-link">Details</Link>
            
             </div>
        </div>
    
        </div>
        
    )

}
); 
return(
        <div className='container'>
            
            {
            Products.length ===0 ?
           
            <div style={{display:'flex',height:'300px', justifyContent:'center', alignItems:'center'}}>
                <h2>No Products yet</h2>
            </div>:
            
            <div>
                <div className="d-flex flex-wrap flex-grow">
                   {productCards}
                </div>
            </div>
            }
            <div style={{display:'flex', justifyContent:'center'}}>
                <button className="btn btn-secondary">Load more</button>
            </div>
          
            
        </div>

    )
}

export default ShowProduct;