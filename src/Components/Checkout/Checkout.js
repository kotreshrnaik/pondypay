import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="text-center">
              <h2 className="pt-2 pb-2 text-center text-primary">
                Register/Login
              </h2>
            </div>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit" className="mb-3 ms-2 text-white">
                  Submit
                </Button>
                <Link to="/register" className="mb-3 ms-2 text-white btn btn-primary">
                  Register
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
