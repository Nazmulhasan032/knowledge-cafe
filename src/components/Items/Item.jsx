import React from 'react';
import './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Item = (props) => {
    const handleCart = props.handleCart;
    const handleReadTime= props.handleReadTime;
    const {name, picture, time, title, user}= props.loadData;
    
    return (
        <div className='cart-item'>
            <img src={picture} alt="cover-image" />
            <div className='cart-user-info'>
                <div className='user'>
                    <img src={user} alt="user-image" />
                    <div className='user-name'>
                        <h4>{name}</h4>
                        <p>Mar 14 (4 Days ago)</p>
                    </div>
                </div>
                <p>{time} min read <button onClick={()=>handleCart(props.loadData)} className='bookmarkBtn'><FontAwesomeIcon icon={faBookmark} /></button> </p>
            </div>
            <h2>{title}</h2>
            <a onClick={()=>handleReadTime(props.loadData)} href="#">Mark as read</a>

        </div>
    );
};

export default Item;