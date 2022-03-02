import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Product() {
  const products = [
    {
      title: "Headphone1",
      discreption:
        "Some quick example text to build on the card title and make up the bulk of the cards content.",
      img: "https://m.media-amazon.com/images/I/51xxA+6E+xL._SL1500_.jpg",
    },
    {
      title: "Headphone2",
      discreption:
        "Some quick example text to build on the card title and make up the bulk of the cards content.",
      img: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/243/10142/5271557fd49fd9915116b7e6e59cfbece66b796e52d9c3a8720deb86737f48c5__21400.1645946182.jpg?c=2",
    },
    {
      title: "Headphone3",
      discreption:
        "Some quick example text to build on the card title and make up the bulk of the cards content.",
      img: "https://m.media-amazon.com/images/I/61YvHa6o94L._SY355_.jpg",
    },
  ];
  return (
    <Container>
      <Row>
        {products.map((product, index) => (
          <Col md={4} key={index}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.discreption}</Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Product;
