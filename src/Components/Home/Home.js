import React from "react";
import { Col, Container, Image, Button, Card } from "react-bootstrap";
import MainSlider from "./../Includes/MainSlider";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import FishImage from "../../Images/Gallery/pomfret.png";
import AboutImage from "../../Images/slider/Front-Page.png";

const Home = () => {
  const FishData = [
    {
      id: 1,
      title: "Pomfret",
      imgURL: FishImage,
      alt: "Pomfret",
      rating: "*****",
      description: "content",
      bntURL: "/services",
    },
    {
      id: 2,
      title: "Pomfret",
      imgURL: FishImage,
      alt: "Pomfret",
      rating: "*****",
      description: "content",
      bntURL: "/services",
    },
    {
      id: 3,
      title: "Pomfret",
      imgURL: FishImage,
      alt: "Pomfret",
      rating: "*****",
      description: "content",
      bntURL: "/services",
    },
    {
      id: 4,
      title: "Pomfret",
      imgURL: FishImage,
      alt: "Pomfret",
      rating: "*****",
      description: "content",
      bntURL: "/services",
    },
  ];

  return (
    <div>
      <MainSlider />

      <div id="content" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={6} className="align-self-center">
              <div className="text-center">
                <Image src={AboutImage} alt="about" className="img-fluid" />
              </div>
            </Col>
            <Col md={6} className="align-self-center">
              <div className="">
                <h5 className="pt-2 pb-2 text-primary">
                  Best Quality Sea Food
                </h5>
                <h2>
                  Join the Fresh <br />
                  Movement!
                </h2>
                <Button
                  className="btn btn-success text-white"
                  as={Link}
                  to="/about"
                >
                  SHOP NOW
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="quality" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={3}>
              <div className="bg-dark text-white rounded">
                <Row className="m-1 p-2">
                  <Col className="align-self-center" md={2}>
                    <i class="fa fa-truck fs-4" aria-hidden="true"></i>
                  </Col>
                  <Col md={10}>
                    <h2>Shipping</h2>
                    <p>Peduchery & Bengaluru</p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={3}>
              <div className="bg-dark text-white rounded">
                <Row className="m-1 p-2">
                  <Col className="align-self-center" md={2}>
                    <i class="fa fa-truck fs-4" aria-hidden="true"></i>
                  </Col>
                  <Col md={10}>
                    <h2>Shipping</h2>
                    <p>Peduchery & Bengaluru</p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={3}>
              <div className="bg-dark text-white rounded">
                <Row className="m-1 p-2">
                  <Col className="align-self-center" md={2}>
                    <i class="fa fa-truck fs-4" aria-hidden="true"></i>
                  </Col>
                  <Col md={10}>
                    <h2>Shipping</h2>
                    <p>Peduchery & Bengaluru</p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={3}>
              <div className="bg-dark text-white rounded">
                <Row className="m-1 p-2">
                  <Col className="align-self-center" md={2}>
                    <i class="fa fa-truck fs-4" aria-hidden="true"></i>
                  </Col>
                  <Col md={10}>
                    <h2>Shipping</h2>
                    <p>Peduchery & Bengaluru</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="fishdata" className="pt-3 pb-3 pt-md-5 pb-md-5  bg-light">
        <Container>
          <h2 className="pt-2 pb-2 text-center text-white">
            Best Selling Seafoods
          </h2>
          <Row>
            {FishData.map((item) => (
              <Col md={3} key={item.id}>
                <Card className="m-1 text-center shadow">
                  <Card.Img
                    variant="top"
                    src={item.imgURL}
                    alt={item.alt}
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.rating}</Card.Text>
                    <Card.Text>{item.price}</Card.Text>
                    <Card.Text>{item.description}</Card.Text>

                    <Button
                      variant="primary"
                      className="text-white"
                      as={Link}
                      to={item.bntURL}
                    >
                      Buy Now
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

export default Home;
