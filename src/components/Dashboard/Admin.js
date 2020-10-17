import React,{Fragment, useState} from 'react';
import WelcomeAdmin from './WelcomeAdmin';
import  createCategory from '../../Api/Category';


const AdminDashboard=()=>{
    /**
     * Setup Category state
     */
    const [category,setCategory] =useState('');


/**
 * Event handler for add new category
 */
    const handleCategoryChange=(evt)=>{
        const value =evt.target.value;
        setCategory(value);  
    }

    const handleCategorySubmit=(evt)=>{
        evt.preventDefault();

        const data ={category};
       
        //api call
        createCategory(data);
         

    }

    const actionBtns=()=>(
         <div className="bg-light">
        <div className="container">
        <div className="row">
            <div className="col-md-6 mt-1 py-2">
                    <button className="btn btn-outline-info btn-block" data-toggle="modal" data-target="#addNewCategory">
                            Add New Category
                    </button>
            </div>
            <div className="col-md-6 mt-1 py-2">
                <button className="btn btn-outline-info btn-block  " data-toggle="modal" data-target="#addNewProduct">
                   Add New Product
                </button>
            </div>

          
        </div>
        

    </div>
    </div>
    );

    const addNewCategory=()=>(
    <div className='modal' id='addNewCategory'>
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
                        
                            <label className="text-secondary">Category</label>
                            <input type='text' className="form-control" name="category" value={category}
                            onChange={handleCategoryChange}/>
                        
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
                    <form >
                    <div className="modal-header  bg-info text-white">
                        <h5 className="modal-title">Add New Product</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                    <div className="modal-body my-3">
                        
                            <Fragment>
                                <div className="customs-file-input col-md-12 ">
                                    <input type='file' className='custom-file-input'/>
                                    <label className="custom-file-label">Choose Img</label>
                                </div>
                                <div className="form-group mt-2">
                                    <label className="text-secondary">
                                        Title
                                    </label>
                                    <input type='text' className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label className="text-secondary">
                                        Description
                                    </label>
                                    <textarea rows='3' className="form-control"></textarea>
                                </div>
                               
                                <div className="form-group">
                                    <label className="text-secondary">
                                        Price
                                    </label>
                                    <input type='text' className="form-control"/>
                                </div>
                                <div className="form-row">
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
                                    <div className="form-group col-md-6">
                                        <label className="text-secondary">
                                        Quantity (Kg)
                                    </label>
                                            <input type="number" min="0" max="100000" className="form-control"/>
                                                     
                                    </div>
                                    
                                    </div>
                                    <div className="form-row">
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
                                
                            </Fragment>
                        
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