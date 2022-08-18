import React from 'react';
import { useNavigate } from 'react-router-dom';
// import useProducts from '../../hooks/useProducts';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import useCart from './../../hooks/useCart';
import { Button, Container, Row } from 'react-bootstrap';


const OrderReview = () => {
    // const [products] = useProducts();
    const [cart,setCart] = useCart();
    const navigate = useNavigate();

    const handleRemove = id =>{
        const newCart = cart.filter(product => product._id !== id);
        setCart(newCart);
        removeFromDb(id);

    }
    const handlePlaceOrder = ()=>{
        navigate('/shipment');
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className="shop-container margin-top">
           <Container>
           <Row>
                 {
                    cart.map(product => <ReviewItem
                    key={product._id}
                    product={product}
                    handleRemove={handleRemove}
                    ></ReviewItem>)
                 }
            </Row>
           </Container>
            <div className="cart-container">
            <Cart cart={cart}>
                <Button 
                onClick={handlePlaceOrder} 
                className="btn">Proceed Shipping</Button>
           
            </Cart>
            </div>
            
        </div>
    );
};

export default OrderReview;