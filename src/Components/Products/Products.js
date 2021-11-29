import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import ServiceImage from "../../Images/Gallery/sample.png";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from './../../Store/actions';

const initialData = [
  {
    id: 1,
    title: "Concrete",
    imgURL: ServiceImage,
    alt: "Concrete",
    description: "content",
    price: 325,
    bntURL: "/services",
  },
  {
    id: 2,
    title: "Concrete",
    imgURL: ServiceImage,
    alt: "Concrete",
    description: "content",
    price: 325,
    bntURL: "/services",
  },
  {
    id: 3,
    title: "Concrete",
    imgURL: ServiceImage,
    alt: "Concrete",
    description: "content",
    price: 325,
    bntURL: "/services",
  },
];

const Products = () => {
  const [products, getProducts] = useState(initialData)  

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }

  const cartItems = useSelector(state =>{
    if(state && state.items && state.items.length > 0)
    {
      return state.items
    }
    else 
    {
      return [];
    }
  })

  useEffect(() => {
    if(cartItems && cartItems.length > 0){
      getProducts(products.map(products => {
         let itemInCart = cartItems.find(cartItems => cartItems.id === products.id);

         if(itemInCart)
         {
           products.isAdded = true;
         }
         return products;
       }))
    }
  }, [cartItems, products])

  return (
    <div>
      <div id="products" className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Products</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact us
                    </li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="services" className="pt-3 pb-3 pt-md-5 pb-md-5  bg-light">
        <Container>
          <Row>
            {products.map((item) => (
              <Col md={4} key={item.id}>
                <Card className="m-1 text-center shadow">
                  <Card.Img
                    variant="top"
                    src={item.imgURL}
                    alt={item.alt}
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text>{item.price}</Card.Text>
                    {
                      item.isAdded ? <Button
                      variant="primary"
                      className="text-white"
                    >
                      Added
                    </Button>
                    :
                    <Button
                      variant="primary"
                      className="text-white"
                      onClick={ () => handleAddItem(item) }
                    >
                      Add to Cart
                    </Button>
                    }
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Products;
