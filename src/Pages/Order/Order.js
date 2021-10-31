import React from 'react';
import Footer from '../Footer/Footer';

const Order = () => {
    return (
        <div>
           <div>
           <h2>Your Discounts</h2>
            <p>You'll have Discounts based on your history and order details</p>
            <p>Call 972-255-0273 to get your coupon code</p>
            <input type="text" className="txt" />
            <button>Coupon Code</button>
           </div>

           <Footer></Footer>
            
        </div>
    );
};

export default Order;