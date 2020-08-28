import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';
import './Online.css'

const Online = (props) => {
    console.log(props)
    const {name, instructor, price, img, contract} = props.classes;
    const [details, setDetails] = useState('');
    const addClassHandle = props.addClassHandle;

    const showDetails =()=>{setDetails(contract)};
    return (
        <div className='online d-flex justify-content-start'>
            <div className='course-img'>
                <img src={img} alt="" class="rounded float-right"/>
            </div>
            <div className='course-details'>
                <h4>Course Name : {name} </h4>
                <p> Instructor : {instructor} </p>
                <p><strong> only $ {price}</strong></p>
                <p>Details : {details} </p>
                <button onClick={showDetails} id="link-btn" class="btn btn-link">course details</button>
                <br/>
                <button onClick={()=> addClassHandle (props.classes)} class="btn btn-info"> <FontAwesomeIcon icon={faHandPointer} /> <span id="btn-text" >Enroll Now</span> </button>
            </div>
        </div>
    );
};

export default Online;