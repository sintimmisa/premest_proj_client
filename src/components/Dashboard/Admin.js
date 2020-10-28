import React,{Fragment, useState} from 'react';
import {Link} from 'react-router-dom'
import WelcomeAdmin from './WelcomeAdmin';
import  createCategory from '../../Api/Category';
import  {createProduct} from '../../Api/Product';
import {getAppProduct} from '../../Api/Product'
import isEmpty from 'validator/lib/isEmpty';
import errorMsg from '../Alerts/errorMsg';
import successMsg from '../Alerts/successMsg';
import loading from '../Loading/loading';


const AdminDashboard=()=>{
    /**
     * Setup Category state
     */
    const [category,setCategory] =useState('');

    //errorMsg,successMsg,loading state
    const [errMsgState, setErrMsgState] = useState('');
    const [successMsgState, setSuccessMsgState]=useState('');
    const [loadingState, setLoadingState]=useState(false);

    //Setup productData state
    const [productData ,setProductData]=useState({
        prodTitle:"",
        prodDesc:"",
        prodImg:null,
        prodPrice:"",
        prodInstock:"",
        
    })
    //destructure productData state
    const{prodTitle,prodDesc,prodImg,prodPrice,prodInstock} =productData;

    //handle Product input value changes
    const handleProdChange=(evt)=>{
        setErrMsgState("");
        setSuccessMsgState("");
        setLoadingState("");
        const value=evt.target.value;
        const name=evt.target.name;
        setProductData({
            ...productData,
            [name]:value
        });

        console.log(value);
   }

   const handleProdImg=(evt)=>{
       console.log(evt.target.files[0]);
        const value=evt.target.files[0];
        const name=evt.target.name;
       setProductData({
           ...productData,
           [name]:value,
       });
   }

   const handleProdSubmit=(evt)=>{
       evt.preventDefault();
       setSuccessMsgState(false);
       setLoadingState(false);
         setErrMsgState(false);
       //added client side validation of product form
       if (prodImg===null ){
           setErrMsgState("Please Select an Image");

       }else if (isEmpty(prodTitle) || isEmpty(prodDesc) || isEmpty(prodPrice)){
             setErrMsgState("All fields are required!");
       }else if(isEmpty(prodInstock)){
            setErrMsgState("Please select product quantity in-stock!");
       }else{
           //on success
            let formInputData = new FormData();
            //formInputData.append('productData',productData);
            formInputData.append('prodTitle',prodTitle);
            formInputData.append('prodPrice',prodPrice);
            formInputData.append('prodImg',prodImg);
            formInputData.append('prodDesc',prodDesc);
            formInputData.append('prodInstock',prodInstock);

            //call prod api
            setLoadingState(true);
                createProduct(formInputData)
                .then((response)=>{
                    //clear all input fields
                    setProductData({
                            prodTitle:"",
                            prodDesc:"",
                            prodImg:null,
                            prodPrice:"",
                            prodInstock:""

                    });
                     setLoadingState(false);
                     setErrMsgState(false);
                    setSuccessMsgState(response.data.successMessage);

                })
                .catch((err)=>{
                    setSuccessMsgState(false);
                    console.log(err);
                    setErrMsgState(err.response.data.errorMessage);
                })
       }

   }


/**
 * Event handler for add new category
 */
    const handleCategoryChange=(evt)=>{
        //reset states
        setErrMsgState("");
        setSuccessMsgState("");
        setLoadingState(false);
        const value =evt.target.value;
        setCategory(value);  
    }


    const handleMsg=(evt)=>{
        setErrMsgState("");
        setSuccessMsgState("")
    }
    const handleCategorySubmit=(evt)=>{
        evt.preventDefault();
        if (isEmpty(category)){
            setErrMsgState("Please enter category");

        }else{
            
            const data={category}
            setLoadingState(true);
            createCategory(data).then(response=>{
                setLoadingState(false);
                setCategory("");
                setSuccessMsgState(response.data.successMessage);
            }).catch(err=>{
                setErrMsgState(err.response.data.errorMessage);
               

        })
    }}

  
/**Action btn function */
    const actionBtns=()=>(
         <div className="bg-light">
        <div className="container">
        <div className="row">
            <div className="col-md-6 mt-1 py-2">
                {
                /*<button className="btn btn-outline-info btn-block" data-toggle="modal" data-target="#addNewCategory">
                            Add New Category
                </button>*/
                }
                    
            </div>
            <div className="col-md-6 mt-1 py-2">
                <button className="btn btn-outline-info btn-block" data-toggle="modal" data-target="#addNewProduct">
                            Add Product
                </button>
            </div>

          
        </div>
        

    </div>
    </div>
    );
    /**Add New CAtegory Function */
  
    const addNewCategory=()=>(

    <div className='modal' id='addNewCategory' onClick={handleMsg}>
            <div className='modal-dialog modal-dialog-centered modal-lg'>
                <div className="modal-content">
                    <form onSubmit={handleCategorySubmit}>
                    <div className="modal-header  bg-info text-white">
                        
                        <h5>Add New Category</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                    <div className="modal-body my-3">
                        { errMsgState && errorMsg(errMsgState)}
                        { successMsgState && successMsg(successMsgState)}
                        {
                            loadingState? loading():(
                                <Fragment>
                                    <label className="text-secondary">Category</label>
                                    <input type='text' className="form-control" name="category" value={category}
                                    onChange={handleCategoryChange}/>
                                </Fragment>
                            )
                        }
                            
                        
                    </div>
                    <div className="modal-footer">
                         <button className="btn btn-secondary"  data-dismiss="modal" >
                            Cancel
                        </button>
                         <button type="submit" className=" btn btn-info">
                            Save
                        </button>
                    </div>
                    </form>
                </div>
            </div>
    </div>
);


  const addNewProduct=()=>(
    <div className='modal' id='addNewProduct'>
            <div className='modal-dialog modal-dialog-centered modal-lg'>
                <div className="modal-content">
                    <form onSubmit={handleProdSubmit}>
                    <div className="modal-header  bg-info text-white">
                        <h5 className="modal-title">Add New Product</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                    <div className="modal-body my-3">
                          { errMsgState && errorMsg(errMsgState)}
                        { successMsgState && successMsg(successMsgState)}
                        {
                            loadingState? loading():(
                        
                            <Fragment>
                                <div className="customs-file-input col-md-12 ">
                                    <label className="custom-file-label">Choose Img</label>
                                    <input type='file' className='custom-file-input' name="prodImg"  onChange={handleProdImg}/>
                                    
                                </div>
                                <div className="form-group mt-2">
                                    <label className="text-secondary">
                                        Title
                                    </label>
                                    <input type='text' className="form-control" name="prodTitle" value={prodTitle}  onChange={handleProdChange}/>
                                </div>
                                <div className="form-group">
                                    <label className="text-secondary">
                                        Description
                                    </label>
                                    <textarea rows='3' className="form-control" name="prodDesc" value={prodDesc} onChange={handleProdChange}></textarea>
                                </div>
                               
                                <div className="form-group">
                                    <label className="text-secondary">
                                        Price: GHC
                                    </label>
                                    <input type='text' className="form-control" name="prodPrice" value={prodPrice} onChange={handleProdChange}/>
                                </div>
                                <div className="form-row">
                                    {/*
                                    
                                    <div className="form-group col-md-6">
                                        
                                        <label className="text-secondary">
                                        Category
                                        </label>
                                        <select className="custom-select mr-sm-2">
                                            <option>Select Category</option>
                                            <option>Root Vegetables</option>
                                            <option>Tubers</option>
                                            <option>Green Leafy Vegetables</option>
                                            <option>Herbs and Spices</option>
                                            <option>legumes</option>
                                        </select>
                                    </div>
                                    */}
                                    
                                    <div className="form-group col-md-6">
                                        <label className="text-secondary">
                                        Instock: (Kg)
                                    </label>
                                            <input type="number" min="0" max="100000" className="form-control" name="prodInstock" value={prodInstock} onChange={handleProdChange}/>
                                                     
                                    </div>
                                    
                                    </div>
                                    {/**
                                     * <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label className="text-secondary">
                                        Location
                                        </label>
                                        <select className="custom-select mr-sm-2">
                                            <option>Select Region</option>
                                            <option>Greater Accra</option>
                                            <option>Easter Region</option>
                                            <option>Volta Region</option>
                                            <option>Central Region</option>
                                            <option>Western North Region</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="text-secondary">
                                        Phone
                                    </label>
                                            <input type="text"  className="form-control"/>
                                                     
                                    </div>
                                    
                                    </div>
                                     */}
                                   
                                
                            </Fragment>
                            )  }
                    </div>
                    <div className="modal-footer">
                         <button className="btn btn-secondary"  data-dismiss="modal" >
                            Cancel
                        </button>
                         <button type="submit" className=" btn btn-info">
                            Save
                        </button>
                    </div>
                    </form>
                </div>
            </div>
    </div>
);



    return(
        <div className=""> 
           <WelcomeAdmin/>
            {actionBtns()}
           {addNewCategory()}
           {addNewProduct()}
           

        </div>
    )
}
export default AdminDashboard;