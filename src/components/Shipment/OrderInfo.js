import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const OrderInfo = () => {
    const navigate = useNavigate()
    return (
        <div className='margin-top text-center p-5'>
            
           <h1>Your Order Confirm</h1>
           <h2>Thank you to shopping with us</h2>
           <br />
           <Button onClick={()=>navigate('/')}>Continue Shopping</Button>
        </div>
    );
};

export default OrderInfo;