import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import SearchProductsShow from './SearchProductsShow';

const SearchPd = () => {
    const [products] = useProducts();
    const [displayProducts, setDisplayProducts] = useState([]);

    const handleSearch = event => {
        const searchText = (event.target.value);
        const matchedProduct = products.filter(product =>
            product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProduct);

    }
    return (
        <div className="search-container margin-top">
        <input
            placeholder="Search Product"
            onChange={handleSearch}
            type="text"
        ></input>

           <Row>
                        {
                            displayProducts.map(product => <SearchProductsShow
                                key={product._id}
                                product={product}
                               
                            ></SearchProductsShow>)
                        }
            </Row>
    </div>
    );
};

export default SearchPd;