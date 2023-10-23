import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


export const ProductDetail=(props)=>{
    const {name, price, description,stock, availability}=props.productDetail;
    console.log(props)
    return (
        <div className="singleCardContainer" >
             <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.productDetail.image} alt="image" />
          <Card.Body>
            <Card.Title>{props.productDetail.name}</Card.Title>
            <Card.Text>
             Discription:{description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Stock: {stock}</ListGroup.Item>
            {/* <ListGroup.Item>Availability:{props.availability} </ListGroup.Item> */}

          </ListGroup>
          <Card.Body>
          <Button variant="primary">Buy Now at {price} rs. only</Button>
          <Button variant="primary">Add to cart</Button>
            {/* <Card.Link href="#">Buy Now at {price} rs. only </Card.Link>
            <button variant="primary"> 
            <Card.Link href="#">Add to Cart </Card.Link> </button> */}
          </Card.Body>
        </Card>
        </div>
       
      );
}