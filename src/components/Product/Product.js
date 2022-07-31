import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import './Product.css';
import { Button, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const Product = (props) => {
  const { name, img, price, stock, seller, ratings } = props.product;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

  return (
    <Col sm={12} md={6} xl={4}>
        <Card className="m-3" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
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
            <Button  className="mt-2"  onClick={() => props.handleAddToCart(props.product)}>{cartIcon} Add to cart</Button>
        </Card.Body>
      </Card>
      </Col>
       
      

  );
};

export default Product;