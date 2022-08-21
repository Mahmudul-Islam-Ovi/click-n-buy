import { useState, useEffect } from 'react';

const useProducts =() => {

    const [products,setProducts] = useState([]);
    useEffect(() => {
        //fetch('http://localhost:5000/products')
        fetch('https://click-n-buy.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    return [products,setProducts];
}

export default useProducts;