import React from 'react';


const  ActionBtns=()=>{

return(
    <div className="bg-light">
        <div className="container">
        <div className="row">
            <div className="col-md-6 mt-1 py-2">
                <button className="btn btn-outline-info  btn-block mr-4 " data-toggle="modal" data-target="#addCategory">
                   Add New Category
                </button>
            </div>
            <div className="col-md-6 mt-1 py-2">
                <button className="btn btn-outline-success btn-block mr-4 ">
                   Add New Product
                </button>
            </div>

          
        </div>
        

    </div>
    </div>
    
)


};
export default ActionBtns;