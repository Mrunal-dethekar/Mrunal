import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class Product extends React.Component {
  constructor(props){
    super(props);
    this.state={
      products : [
        {
          title: "Headphone1",
          discreption:
            "Some quick example text to build on the card title and make up the bulk of the cards content.",
          img: "https://m.media-amazon.com/images/I/51xxA+6E+xL._SL1500_.jpg",
          addedToCart: false,
        },
        {
          title: "Headphone2",
          discreption:
            "Some quick example text to build on the card title and make up the bulk of the cards content.",
          img: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/243/10142/5271557fd49fd9915116b7e6e59cfbece66b796e52d9c3a8720deb86737f48c5__21400.1645946182.jpg?c=2",
          addedToCart: false,
        },
        {
          title: "Headphone3",
          discreption:
            "Some quick example text to build on the card title and make up the bulk of the cards content.",
          img: "https://m.media-amazon.com/images/I/61YvHa6o94L._SY355_.jpg",
          addedToCart: false,
        },
      ]
      
    }

  }

  addedToCart(index){
    let updatedProduct = this.state.products
    updatedProduct[index].addedToCart = updatedProduct[index].addedToCart ? false : true;

    this.setState({
      products : updatedProduct
    })
  }
  render(){
  return (
    <Container>
      <Row>
        {this.state.products.map((product, index) => (
          <Col md={4} key={index}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.discreption}</Card.Text>
                <Button variant="primary">Buy</Button>
                <Button variant="warning" className="m-2" onClick={()=> this.addedToCart(index)}>{product.addedToCart ? "Added To Cart" : "Add To Cart"}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
 }
}

export default Product;
