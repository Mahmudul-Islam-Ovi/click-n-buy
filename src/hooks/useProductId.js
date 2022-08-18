
import { useState, useEffect } from 'react';
import axios from 'axios';


const ProductById = Id => {
    const [product,setProduct] = useState({});
   
    useEffect(() => {
        axios.get(`https://click-n-buy.herokuapp.com/products/${Id}`)
        .then((data) =>{
            setProduct(data.data)
            // console.log(data.data);
        })
    },[Id]);

    return [product];
};

export default ProductById;

