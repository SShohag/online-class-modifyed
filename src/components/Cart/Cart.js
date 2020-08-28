import React from 'react';
import './Cart.css'
import Add from '../Add/Add';

const Cart = (props) => {

    // const{name, img, price} = props.addCourse;
    const subject = props.subject;
    console.log(props)

    let total = 0;
    for (let i = 0; i < subject.length; i++) {
        const subjects = subject[i];
        total = total+subjects.price;
        
    }
    return (
        <div>
            <div className='purchase-container'>
                <h2>Purchase Summery</h2>
                <h3>Total Enrolled : {subject.length} </h3>
                <h4>Total Cost : {total} </h4>
            </div>
            <div className='main-cart'>
                {
                    subject.map(add=> <Add add={add}></Add> )
                }
                
            </div>
        </div>
    );
};

export default Cart;