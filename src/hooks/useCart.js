import { useState, useEffect } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        // if(products.length){
        const saveCart = getStoredCart();
        const storedCart = [];
        const keys = Object.keys(saveCart);
        fetch('https://click-n-buy.herokuapp.com/productByKeys', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                for (const id in saveCart) {
                    const addProduct = products.find(product => product._id === id);
                    if (addProduct) {
                        const quantity = saveCart[id];
                        addProduct.quantity = quantity;
                        storedCart.push(addProduct);
                    }
                }
                setCart(storedCart);
            })

        // }  
    }, []);

    return [cart, setCart];
}

export default useCart;