import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1 className="d-flex justify-content-center"> <span className='letter'>O</span> nline Class</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/add">Selected Course</a>
                <a href="/details">Details</a>
            </nav>
        </div>
    );
};

export default Header;