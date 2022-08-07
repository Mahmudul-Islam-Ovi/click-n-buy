import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const ReviewItem = (props) => {
    const {name,price,quantity,img,_id}= props.product;
    return (
        <Col sm={12} md={6} xl={4}>
            <Card className="mt-2" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
          <Button onClick={()=>props.handleRemove(_id)}
             className="btn">X</Button>
        </Card.Body>
      </Card>
            
        </Col>
    );
};

export default ReviewItem;