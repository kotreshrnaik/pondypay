import React, { useEffect, useState } from "react";
import { Col, Container, Image, Button, Card } from "react-bootstrap";
import MainSlider from "./../Includes/MainSlider";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AboutImage from "../../Images/slider/Front-Page.png";
import Testimonials from "./../Includes/Testimonials";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./../../Store/actions";
import axios from "axios";

const Home = () => {
  const initialData = [];

  const [FishData, SetFishData] = useState(initialData);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const cartItems = useSelector((state) => {
    if (state && state.items && state.items.length > 0) {
      return state.items;
    } else {
      return [];
    }
  });

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      SetFishData(
        FishData.map((products) => {
          let itemInCart = cartItems.find(
            (cartItems) => cartItems.id === products.id
          );

          if (itemInCart) {
            products.isAdded = true;
          }
          return products;
        })
      );
    }
  }, [cartItems]);

  useEffect(() => {
    axios
      .get("http://localhost/react-projects/pondypay/Api/getdata.php")
      .then((response) => {
        // console.log(response);
        SetFishData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

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
              <div className="text-center">
                <h5 className="pt-2 pb-2 text-primary">
                  Best Quality Sea Food
                </h5>
                <h2 className="pt-2 pb-2">Join the Fresh Movement!</h2>
                <Button
                  className="btn btn-success text-white mt-2"
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
              <div className="bg-warning border-0 pt-2 pb-2 text-white text-center rounded">
                <Row className="m-1 p-2">
                  <Col className="align-self-center" md={2}>
                    <i
                      className="fa fa-truck text-secondary fs-4"
                      aria-hidden="true"
                    ></i>
                  </Col>
                  <Col md={10}>
                    <h5>Shipping</h5>
                    <p className="m-0">Peduchery & Bengaluru</p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={3}>
              <div className="bg-warning border-0 pt-2 pb-2 text-white text-center rounded">
                <Row className="m-1 p-2">
                  <Col className="align-self-center" md={2}>
                    <i
                      className="fas fa-fish text-secondary fs-4"
                      aria-hidden="true"
                    ></i>
                  </Col>
                  <Col md={10}>
                    <h5>100% Fresh</h5>
                    <p className="m-0">100% Guarantee</p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={3}>
              <div className="bg-warning border-0 pt-2 pb-2 text-white text-center rounded">
                <Row className="m-1 p-2">
                  <Col className="align-self-center" md={2}>
                    <i
                      className="fas fa-piggy-bank text-secondary fs-4"
                      aria-hidden="true"
                    ></i>
                  </Col>
                  <Col md={10}>
                    <h5>Huge Savings</h5>
                    <p className="m-0">at lowest price</p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={3}>
              <div className="bg-warning border-0 pt-2 pb-2 text-white text-center rounded">
                <Row className="m-1 p-2">
                  <Col className="align-self-center" md={2}>
                    <i
                      className="fas fa-microscope text-secondary fs-4"
                      aria-hidden="true"
                    ></i>
                  </Col>
                  <Col md={10}>
                    <h5>No Preservatives</h5>
                    <p className="m-0">No Chemicals</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="fishdata" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <h2 className="pb-2 text-center text-primary">
            Best Selling Seafoods
          </h2>
          <Row>
            {FishData.map((item) => (
              <Col md={3} key={item.id}>
                <Card className="m-1 text-center shadow link" as={Link} to={item.CardURL}>
                  <Card.Img
                    variant="top"
                    src={item.imgURL}
                    alt={item.alt}
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>{item.productTitle}</Card.Title>
                    <div className="d-flex justify-content-center">
                      <div>
                        <Card.Text className="text-decoration-line-through">
                        ₹ {item.price}
                        </Card.Text>
                      </div>
                      <div>
                        <Card.Text className="ps-3">₹ {item.price1}</Card.Text>
                      </div>
                    </div>
                    <Card.Text>{item.description}</Card.Text>

                    {/* {item.isAdded ? (
                      <Button variant="primary" className="text-white">
                        Added
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        className="text-white"
                        onClick={() => handleAddItem(item)}
                      >
                        Add to Cart
                      </Button>
                    )} */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div id="first-section" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={4}>
              <div
                className="text-center p-2 bg-light shadow"
                style={{ height: "225px" }}
              >
                <h2 className="pt-2 pb-2 text-uppercase text-primary">
                  We Catch
                </h2>
                <p>
                  We use our own boats to catch the best of fish, sea crabs, sea
                  prawns, squids, and many other edible sea creatures.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div
                className="text-center p-2 bg-light shadow"
                style={{ height: "225px" }}
              >
                <h2 className="pt-2 pb-2 text-uppercase text-primary">
                  We Sell
                </h2>
                <p>
                  Our ‘online’ market gives everyone easy and quick access to
                  know the catch of the day and make the order from anywhere. We
                  are Just a phone call away for the for the best available
                  fresh fish.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div
                className="text-center p-2 bg-light shadow"
                style={{ height: "225px" }}
              >
                <h2 className="pt-2 pb-2 text-uppercase text-primary">
                  We Satisfy
                </h2>
                <p>
                  We are proud of the quality and condition of our fish and we
                  would love to see it on your menu.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="second-section" className="pt-3 pb-3 pt-md-5 pb-md-5" style={{}}>
        <Container>
          <Row>
            <Col md={12}>
              <div className="text-center">
                <h2>
                  “Seafood is our passion, freshness is our mission, and quality
                  is our commitment”
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="third-section" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-warning">
        <Container>
          <Row>
            <Col md={4}>
              <div className="text-center">
                <h2 className="text-white">
                  Get 10% OFF on your First Purchase!
                </h2>
              </div>
            </Col>
            <Col md={5}>
              <div className="text-center">
                <h2 className="text-secondary">
                  Apply Coupen Code at Checkout
                </h2>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <h2 className="text-success text-uppercase">pondybay</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Testimonials />
    </div>
  );
};

export default Home;
