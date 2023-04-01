import React from 'react';
import "./Actions.css"

const Actions = (props) => {
    const {readTime} = props
    return (
        <div className='action-menu me-4 .pe-5'>
            <div className='action-meanu me-5 pe-5 my-5'>
            <div className='me-5 pe-5 bg-warning'>
            <h3 className='text-wrap'>Spent time on read : {readTime} min</h3>
            </div>
            <div className='me-5 pe-5 bg-success'>
                <h3>Hii</h3>
            </div>
        </div>
        </div>

        
    );
};

export default Actions;