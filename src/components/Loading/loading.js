import React from 'react';

const Loading=()=>{
    return(
        <div className="d-flex justify-content-center py-3">
  <div className="spinner-border text-primary " role="status">
    <span className="sr-only">Loading...</span>
  </div>
</div>
    )
};
export default Loading;