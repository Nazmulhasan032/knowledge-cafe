import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-area'>
            <div className='header-section'>
                <h2>Knowledge Cafe</h2>
                <div className="nav">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Login</a>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Header;