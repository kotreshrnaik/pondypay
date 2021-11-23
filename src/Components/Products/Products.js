import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServiceImage from "../../Images/Gallery/image-1.png";

const Products = () => {
  const ServiceData = [
    {
      id: 1,
      title: "Concrete",
      imgURL: ServiceImage,
      alt: "Concrete",
      description: "content",
      bntURL: "/services",
    },
    {
      id: 2,
      title: "Concrete",
      imgURL: ServiceImage,
      alt: "Concrete",
      description: "content",
      bntURL: "/services",
    },
    {
      id: 3,
      title: "Concrete",
      imgURL: ServiceImage,
      alt: "Concrete",
      description: "content",
      bntURL: "/services",
    },
  ];
  return (
    <div>
      <div id="products" className="bg-secondary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Products</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="services" className="pt-3 pb-3 pt-md-5 pb-md-5  bg-light">
        <Container>
          <Row>
            {ServiceData.map((item) => (
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
                    <Button
                      variant="primary"
                      className="text-white"
                      as={Link}
                      to={item.bntURL}
                    >
                      Read More
                    </Button>
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
