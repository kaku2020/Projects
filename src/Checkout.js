import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal.js';


function Checkout() {
  return (
   
    <div className="checkout">
      <div className="checkout__left">
      <img src="https://business.amazon.in/assets/in/14th-july/462_AB_PD_Website_Hero_2880x480_New.jpg.transform/2880x480/image.jpg" className="checkout__ad" alt="logo" />
      <div>
        <h2 className="checkout__title">Your shopping Basket</h2>
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
      </div>
      </div>
     
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout