import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import './Product.css';


const Product = (props) => {
    const {name ,img,price,stock,seller ,ratings} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
           <div>
           <img className='img' src={img} alt="" />
           </div>
           <div  className="product-details">
           <h3 className="product-name">{name}</h3>
            <p><small>by :{seller}</small></p>
            <p>Price: {price}</p>
            <p> <small>only {stock} left in stock - order soon</small> </p>
            
            <Rating
              emptySymbol="fa fa-star-o icon-color"
               fullSymbol="fa fa-star icon-color"
               initialRating={ratings}
               readonly
               />
            <br />
            <button
             onClick={() =>props.handleAddToCart(props.product)}
             className="btn">{cartIcon} add to cart</button>
           </div>
        </div>
    );
};

export default Product;