import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import './Product.css';
import { Button, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import PageTitle from '../PageTitle/PageTitle';
import { useNavigate } from 'react-router-dom';


const Product = (props) => {
  const {_id, name, img, price, stock, seller, ratings } = props.product;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
  const navigate = useNavigate()

  const handleSingleProduct = (id) => {
    navigate(`/productById/${id}`)
  }

  return (
    <Col sm={12} md={6} xl={4}>
      <PageTitle title='Product'></PageTitle>
      <Card className="m-2" style={{ width: '22rem' }}>
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
          <Button className="mt-2" onClick={() => props.handleAddToCart(props.product)}>{cartIcon} Add to cart</Button>
          <br></br>
          <Button className="mt-2" onClick={()=>handleSingleProduct(_id)}>{cartIcon} Show Details</Button>
        </Card.Body>
      </Card>
    </Col>



  );
};

export default Product;