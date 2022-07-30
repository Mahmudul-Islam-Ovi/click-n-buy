import { useState, useEffect } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = products => {

    const [cart,setCart]= useState([]);
    useEffect(() =>{   
        if(products.length){
            const saveCart= getStoredCart();
            const storedCart =[]
            for (const id in saveCart){
                const addProduct = products.find(product => product.id === id);
                if(addProduct){
                    const quantity = saveCart[id];
                    addProduct.quantity = quantity;
                    storedCart.push(addProduct);
                }
            }
            setCart(storedCart);
        }  
    },[products]);

    return [cart,setCart];
}

export default useCart;