import React from 'react';

const ReviewItem = (props) => {
    const {name,price,quantity,img,id}= props.product;
    return (
        <div className="product">
            <div>
           <img className='img' src={img} alt="" />
           </div>
            <div className="product-details">
            <h4 className="product-name">{name}</h4>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={()=>props.handleRemove(id)}
             className="btn">Remove</button>
            </div>
            
        </div>
    );
};

export default ReviewItem;