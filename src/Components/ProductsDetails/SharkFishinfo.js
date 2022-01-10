import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Form, Button, Card } from "react-bootstrap";
import sampleFish from "../../Images/Gallery/sample.png";
import SampleTabs from "./SampleTabs";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./../../Store/actions";

const SharkFishinfo = () => {

  const initialData = [
    {
      id: 1,
      title: "Cut & Cleaned Fish",
      price: 60,
      imgURL: sampleFish,
      alt: "Samplefish",
    },
    {
      id: 2,
      title: "Cleaned Fish",
      price: 30,
      imgURL: sampleFish,
      alt: "Samplefish",
    },
    {
      id: 3,
      title: "Cleaned Fish",
      price: 30,
      imgURL: sampleFish,
      alt: "Samplefish",
    },
    {
      id: 4,
      title: "Cleaned Fish",
      price: 30,
      imgURL: sampleFish,
      alt: "Samplefish",
    },
  ];

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
  }, [cartItems, FishData]);
  
  const [weight, Setweight] = useState(0.5);
  const [Price, Setprice] = useState(30); 

  const IncrementCouter = () => {
    Setweight(weight + 0.5);
    Setprice(weight * 60);
  };

  const DecrementCouter = () => {
    if (weight === 0.5) {
      Setweight(0.5);
      Setprice(weight * 60);
    } else {
      Setweight(weight - 0.5);
      Setprice(weight * 60);
    }
  };

  return (
    <div>
     <div id="sample1" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={4}>
              <div className="text-center">
                <Image
                  src={sampleFish}
                  alt="Sample Fish"
                  className="img-fluid rounded shadow"
                />
              </div>
            </Col>
            <Col md={8}>
              <div className="">
                <h2 className="pt-2 pb-2">Crabe</h2>
                <p className="">
                  <del className="">₹399 /500g</del> ₹275 /500g
                </p>
                <p>
                  is one of the best kinds of seafood to incorporate in your
                  diet because it has benefits to keep your body strong and
                  healthy.
                </p>
                <p>
                  High in Protein. Our bodies need protein to build and heal
                  muscles, bones, hair, skin, and blood.Keeps our Heart Healthy
                  – A Great Source of Copper – High in Vitamin B2.
                </p>
              </div>
              <div className="pt-3">
                <SampleTabs />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="sample3" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            {FishData.map((item) => (
              <Col md={3} key={item.id}>
                <Card className="m-1 text-center shadow link">
                  <Card.Img
                    variant="top"
                    src={item.imgURL}
                    alt={item.alt}
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title className="pt-2 pb-2">{item.title}</Card.Title>
                    <div className="d-flex justify-content-center pb-3">
                      <div>
                        <div className="d-inline-flex">
                          <div className="">
                            <p
                              className="text-center border p-2 ps-3 pe-3 fw-bold"
                              onClick={DecrementCouter}
                            >
                              -
                            </p>
                          </div>
                          <div className="">
                            <Form>
                              <Form.Control
                                type="email"
                                placeholder="1"
                                onChange={(e) => e.target.value}
                                value={weight}
                                className="border rounded-0 p-2 text-center"
                              />
                            </Form>
                          </div>
                          <div className="">
                            <p
                              className="text-center border p-2 ps-3 pe-3 fw-bold"
                              onClick={IncrementCouter}
                            >
                              +
                            </p>
                          </div>
                          <div className="">
                            <p className="p-2">1kg</p>
                          </div>
                        </div>
                        <Card.Text className="">
                          ₹ Price: {Price}
                        </Card.Text>
                      </div>
                    </div>

                    {item.isAdded ? (
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
                    )}
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

export default SharkFishinfo;
