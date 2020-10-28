import React,{useState,useEffect} from 'react';
import  {isAuthenticated} from '../../utils/auth';
import {Link} from 'react-router-dom';
import {createProduct} from '../../Api/Product';
import Layout from '../Layout';
//
import isEmpty from 'validator/lib/isEmpty';
import errorMsg from '../Alerts/errorMsg';
import successMsg from '../Alerts/successMsg';
import loading from '../Loading/loading';

const AddProduct =()=>{

    const {user,token}=isAuthenticated();
    const[ product,setProduct]=useState()

    const [values, setValues]=useState({
        prodTitle:"",
        prodDesc:"",
        prodImg:'',
        prodPrice:"",
        prodInstock:"",
        redirectToProfile:false,
        formData:'',
        error:false,
        success:false,
        loading:false
    })

    const {prodTitle,prodDesc,prodImg,prodPrice,prodInstock,redirectToProfile,formData}=values;



      useEffect(()=>{
            setValues({
                ...values,formData: new FormData()
            })

        },[])

    /*Eventt Handlers*/

    //onChange evnt handler
    const handleChange =name=>evt=>{
        const value = name === 'prodImg' ? evt.target.files[0]:evt.target.value

        formData.set(name,value)

        setValues({
            ...values,[name]:value
        })
    }


    //OnSubmit evt handler

    const handleSubmit=(evt)=>{
        evt.preventDefault();

        setValues({
            ...values,loading:true
        })

        //call api
        
        createProduct(user._id,token,formData)
        .then((data)=>{
          if(data.error){
              setValues({...values,error: data.error})
          }else{
              setValues({
                  ...values,title:'',prodDesc:'',prodPrice:'',prodInstock:'', prodImg:'',loading:false
              })
          }
        })
        .catch((err)=>{
            console.log(err);
        })

    }
      

    const addProductForm=()=>(
        <form action="" className="mb-3 px-3" onSubmit={handleSubmit}>
            <h4 className="text-muted">Load Product Image</h4>
            <div className="form-group">
                <label className='btn btn-secondary '>
                <input type='file' name="prodImg" accept='image/*' onChange={handleChange('prodImg')}/>
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="" className="text-muted">Title</label>
                <input type="text" className="form-control" value={prodTitle} onChange={handleChange('prodTitle')}/>
            </div>

            <div className="form-group">
                <label htmlFor="" className="text-muted">Description</label>
                <textarea row="3" className="form-control" value={prodDesc} onChange={handleChange('prodDesc')}/>
            </div>

            <div className="form-group">
                <label htmlFor="" className="text-muted">Price(GHC)</label>
                <input type="number" className="form-control" value={prodPrice} onChange={handleChange('prodPrice')}/>
            </div>
            <div className="form-group">
                <label htmlFor="" className="text-muted">Quantity Instock(Kg)</label>
                 <input type="number" min="0" max="100000" className="form-control" name="prodInstock" value={prodInstock} onChange={handleChange('prodInstock')}/>
            </div>
            <button className="btn btn-primary ">Add Product</button>
        </form>
    );

    return(
        <Layout title="Add a new Product" description={`Welcome, add new product`} className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {addProductForm()}
                </div>
            </div>

        </Layout>
    )

}

export default AddProduct;