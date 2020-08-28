import React from 'react';
import './Add.css'

const Add = (props) => {
    const {name, img, price} = props.add;
    console.log(props)
    return (
        <div className="d-flex justify-content-center add-container">
            <div className='img-fluid addImg'>
                <img src={img} alt=""/ >
            </div>
            <div className='addDetails'>
                <h4> {name} </h4>
                <h5> Price : $ {price} </h5>
            </div>
        </div>
    );
};

export default Add;