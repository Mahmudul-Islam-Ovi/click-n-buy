import React, { useState, useEffect } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';
import { Button, Container, Row } from 'react-bootstrap';
import useCart from '../../hooks/useCart';
import Slider from '../Slider/Slider';


const Shop = () => {

    const [cart, setCart] = useCart();
    // const [displayProducts, setDisplayProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [products,setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://click-n-buy.herokuapp.com/products?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[page,size]);

    useEffect(() => {
        fetch('https://click-n-buy.herokuapp.com/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            });
    }, []);

    // useEffect(() => {
    //     fetch('https://click-n-buy.herokuapp.com/products')
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(data);
    //             // setDisplayProducts(data);
    //         });
    // }, []);

    // useEffect(() => {
    //     if (products.length) {
    //         const saveCart = getStoredCart();
    //         const storedCart = []
    //         for (const id in saveCart) {
    //             const addProduct = products.find(product => product._id === id);
    //             if (addProduct) {
    //                 const quantity = saveCart[id];
    //                 addProduct.quantity = quantity;
    //                 storedCart.push(addProduct);
    //             }
    //         }
    //         setCart(storedCart);
    //     }
    // }, [products])

    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd._id === product._id);
        let newCart = [];
        if (exists) {
            const remaining = cart.filter(pd => pd._id !== product._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...remaining, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product._id);
    }

    return (
        <div className=''>
            {/* <SearchPd></SearchPd> */}
            <Slider></Slider>
            <div className="shop-container">

                <Container >
                    <Row>
                        {
                            products.map(product => <Product
                                key={product._id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></Product>)
                        }
                    </Row>
                    <div className="pagination mb-5">
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <button
                                className={page === number ? 'selected' : ''}
                                onClick={() => setPage(number)}
                                >{number}</button>)
                        }
                        
                        <select onChange={e => setSize(e.target.value)}>
                            <option value='5'>5</option>
                            <option value='10' selected>10</option>
                            <option value='15'>15</option>
                            <option value='20'>20</option>
                        </select>
                    </div>
                </Container>

                <div className="cart-container">
                    <Cart cart={cart} >
                        <Link to='/orders'>
                            <Button className="btn">Review Your Order</Button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>

    );
};

export default Shop;