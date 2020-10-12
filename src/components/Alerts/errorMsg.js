import React from 'react';



const ErrorMsg=(msg)=>{
    return(
            <div className="alert alert-danger" role="alert">
                {msg}
            </div>
    )

}
export default ErrorMsg;
