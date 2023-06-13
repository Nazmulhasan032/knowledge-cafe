import React, { useEffect, useState } from 'react';
import Item from '../Items/Item';
import Sidebar from '../Side-bar/Sidebar';
import './Cart.css';
import { ToastContainer, toast } from 'react-toastify';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [time, setTime] = useState([]);
    const [title, setTitle] = useState([]);
    const [loadData, setLoadData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setLoadData(data))
    }, []);

    const handleCart = (product) => {
        // const newCart = [...cart, product];
        // setCart(newCart);
        // const newTitle = [...title, product.title];
        // setTitle(newTitle);
        const notify = () => toast("Already Bookmarked!");
        const exist = cart.find((item)=>item.title === product.title);
        if(exist){
            notify();
        }else{
            const newCart = [...cart, product];
            setCart(newCart);
            const newTitle = [...title, product.title];
            setTitle(newTitle);

        }

    };


    const handleReadTime = (readTime) => {
        const newTime = [...time, readTime];
        setTime(newTime);

    }

    return (
        <div className='container'>
            <div className="items">
                {
                    loadData.map((loadData) => (
                        <Item
                            loadData={loadData}
                            key={loadData.id}
                            handleCart={handleCart}
                            handleReadTime={handleReadTime}
                        ></Item>

                    ))}


            </div>
            <div className="side-bar">
                <Sidebar
                    cart={cart}
                    time={time}
                    title={title}

                ></Sidebar>

            </div>

        </div>
    );
};

export default Cart;