import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
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

            <div className="border p-3 mb-3 shadow">
              <Form>
              <Form.Group className="mb-3" controlId="Name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Phone">
                  <Form.Label>Phone No</Form.Label>
                  <Form.Control type="tel" placeholder="Enter Phone" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password2">
                  <Form.Label>Re Enter Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <div className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    className="mb-1 ms-2 text-white"
                  >
                    Submit
                  </Button>
                  <Link
                    to="/checkout"
                    className="mb-1 ms-2 text-white btn btn-primary"
                  >
                    Login
                  </Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
