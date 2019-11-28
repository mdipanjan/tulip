import React from 'react';
import './Cart.css';
export default function Cart() {
    return (
        <div className="container py-5">
            <div className="cart-img">
                <img className="cart-img-icon" src="https://www.uvtrades.com/assets/images/nocartIcon.png"/>
            </div>
            
            <p>Your cart is empty!!</p>
        </div>
    )
}
