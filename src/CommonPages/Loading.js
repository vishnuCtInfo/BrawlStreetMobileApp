import React from 'react'

function Loading() {
    return (
        <div className='d-flex justify-content-center align-items-center bg-dark' style={{height:'100vh'}}>
            <div className="spinner-border text-primary" style={{width:'50px',height:'50px'}} role="status">
            </div>
        </div>
    )
}

export default Loading