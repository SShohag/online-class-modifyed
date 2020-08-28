import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Online from '../Online/Online';
import './Body.css'
import Cart from '../Cart/Cart';

const Body = () => {
    const first10 = fakeData.slice(0, 10);
    const [classes, setClasses] = useState(first10);
    const [subject, setSubject] = useState([]);
    

    const addClassHandle = (classes)=>{
       const newSubject = [...subject, classes]
        setSubject(newSubject)
        console.log('clicked me', classes)
    }
    return (
        <div className='body-container'>  
            <div className="product-container">
                <ul>
                    {
                        classes.map(onClass=><Online addClassHandle={addClassHandle} key={onClass.key} classes={onClass}></Online>)
                    }
                </ul>
            </div>
            <div className="cart-container">

                <Cart subject= {subject}></Cart>

            </div>

        </div>
    );
};

export default Body;