import React, { useState } from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import sampleFish from "../../Images/Gallery/sample.png";
import SampleTabs from "./SampleTabs";

const Sample = () => {
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
            </Col>
          </Row>
        </Container>
      </div>

      <div id="sample3" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={3}>
              <div className="text-center p-2 rounded shadow-sm">
                <div className="text-center">
                  <Image
                    src={sampleFish}
                    alt="Sample Fish"
                    className="img-fluid rounded"
                  />
                </div>
                <h4 className="pt-2 pb-2">Cut & Cleaned Crab</h4>
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
                <h5 className="pt-2 pb-2">Price: {Price}</h5>
                <div className="text-center">
                  <Button className="btn btn-primary">Checkout</Button>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center p-2 rounded shadow-sm">
                <div className="text-center">
                  <Image
                    src={sampleFish}
                    alt="Sample Fish"
                    className="img-fluid rounded"
                  />
                </div>
                <h4 className="pt-2 pb-2">Cut & Cleaned Crab</h4>
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
                <h5 className="pt-2 pb-2">Price: {Price}</h5>
                <div className="text-center">
                  <Button className="btn btn-primary">Checkout</Button>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center p-2 rounded shadow-sm">
                <div className="text-center">
                  <Image
                    src={sampleFish}
                    alt="Sample Fish"
                    className="img-fluid rounded"
                  />
                </div>
                <h4 className="pt-2 pb-2">Cut & Cleaned Crab</h4>
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
                <h5 className="pt-2 pb-2">Price: {Price}</h5>
                <div className="text-center">
                  <Button className="btn btn-primary">Checkout</Button>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center p-2 rounded shadow-sm">
                <div className="text-center">
                  <Image
                    src={sampleFish}
                    alt="Sample Fish"
                    className="img-fluid rounded"
                  />
                </div>
                <h4 className="pt-2 pb-2">Cut & Cleaned Crab</h4>
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
                <h5 className="pt-2 pb-2">Price: {Price}</h5>
                <div className="text-center">
                  <Button className="btn btn-primary">Checkout</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="sample2" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={12}>
              <div className="">
                <SampleTabs />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Sample;
