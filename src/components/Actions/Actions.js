import React from 'react';
import "./Actions.css"

const Actions = (props) => {
    const {readTime} = props
    return (
        <div className='me-4 .pe-5'>
            <div className='action-meanu me-5 pe-5 my-5'>
            <div className='me-5 pe-5 bg-warning'>
            <h3>{readTime}</h3>
            </div>
            <div className='me-5 pe-5 bg-success'>
                <h3>Hii</h3>
            </div>
        </div>
        </div>

        
    );
};

export default Actions;