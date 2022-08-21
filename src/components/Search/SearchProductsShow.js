import React from 'react';
import Rating from 'react-rating';
import { Card, Col } from 'react-bootstrap';
import PageTitle from '../PageTitle/PageTitle';

const SearchProductsShow = ({product}) => {
    const {name, img, price, stock, seller, ratings } = product;
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
          </Card.Body>
        </Card>
      </Col>
  
    );
};

export default SearchProductsShow;