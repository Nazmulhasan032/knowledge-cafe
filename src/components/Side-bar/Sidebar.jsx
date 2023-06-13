import React from 'react';
import './Sidebar.css'

const Sidebar = ({cart, time, title}) => {
    let totalTime = 0;
    for(const Time of time){
        totalTime = totalTime + Time.time;
    }


    
    return (
        <div className='side-bar-area'>
            <div className='read-time'>
                <h4>Spent time on read: {totalTime} min</h4>
            </div>
            <div className='blogs'>
                <h3>Bookmarked Blogs: {cart.length}</h3>
                {
                    title.map(arr=><p>{arr}</p>)
                }
                
            </div>                      
        </div>
    );
};

export default Sidebar;