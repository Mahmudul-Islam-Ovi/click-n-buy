import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import useCart from './../../hooks/useCart';



const OrderReview = () => {
    const [products] = useProducts();
    const [cart,setCart] = useCart(products);
    const navigate = useNavigate();

    const handleRemove = id =>{
        const newCart = cart.filter(product => product.id !== id);
        setCart(newCart);
        removeFromDb(id);

    }
    const handlePlaceOrder = ()=>{
        navigate('/shipment');
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                 {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemove={handleRemove}
                    ></ReviewItem>)
                 }
            </div>
            <div className="cart-container">
            <Cart cart={cart}>
                <button 
                onClick={handlePlaceOrder} 
                className="btn">Proceed Shipping</button>
           
            </Cart>
            </div>
            
        </div>
    );
};

export default OrderReview;