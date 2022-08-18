import React from 'react';
import { useParams } from 'react-router-dom';
import ProductById from '../../hooks/useProductId';

const ShowSingleProduct = () => {

    const {productId} = useParams();
    const [product] = ProductById(productId)


    return (
        <div className="margin-top p-5">
            <h1>This is a product : {product.name}</h1>
        </div>
    );
};

export default ShowSingleProduct;