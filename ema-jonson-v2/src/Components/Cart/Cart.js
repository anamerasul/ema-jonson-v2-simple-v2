import React from 'react';

const Cart = (props) => {
    const {cart}=props
    // console.log(props)
    return (
        <div className="mx-4">
            <h4>Order Sumarry</h4>
            <p>Selected Items:{cart.length}</p>
        </div>
    );
};

export default Cart;