import React from 'react';
import WelcomeAdmin from './WelcomeAdmin';



const AdminDashboard=()=>{


    

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
                <button className="btn btn-outline-info btn-block  ">
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
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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


    return(
        <div className=""> 
           <WelcomeAdmin/>
            {actionBtns()}
           {addNewCategory()}
           

        </div>
    )
}
export default AdminDashboard;