import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import Payment from "./Payment";

const Login = () => {
  let navigate = useNavigate();
  const [loggedIn, SetloggedIn] = useState(false)
  const [formStatus, setformStatus] = useState("");
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  };

  const onSubmit = (values) => {
    const Price = 120;
    const data = values;

    axios
      .post("api/users/login", data)
      .then(function (response) {
        console.log(response);
        if (response.data.success) {
          setformStatus(response.data.message);

          localStorage.setItem("Token", response.data.token);

          // displayRazorpay(Price, data.name, data.email, data.phone);

          SetloggedIn(true)
          localStorage.setItem("LoggedIn", true);

          navigate('/pondybay')

          window.location.reload();

          // <Payment values={data}></Payment>
          
        } else {
          setformStatus(response.data.data);
        }
      })
      .catch(function (error) {
        console.log(error);
        setformStatus(error.data);
      });
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("required").email("Invalid email format"),
    password: Yup.string()
      .required("required")
      .min(6, "Phone No Minimum 6 Digits"),
  });

  

  return (
    <div className="bg-light pt-3 pb-3 pt-md-5 pb-md-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="mt-2 mb-2">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form className="bg-white p-3 shadow rounded">
                  <h2 className="pb-2 text-center text-primary">Login</h2>
                  <Row className="mb-3">
                    <Col md={12}>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <Field
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                        />
                        <small className="text-danger">
                          <ErrorMessage name="email" />
                        </small>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={12}>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <Field
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                        />
                        <small className="text-danger">
                          <ErrorMessage name="password" />
                        </small>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={12}>
                      {formStatus ? (
                        <div className="alert alert-success p-3 text-center">
                          {formStatus}
                        </div>
                      ) : null}
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={12}>
                      <div className="text-center">
                        <Button
                          className="btn btn-primary mx-3 text-white"
                          type="submit"
                        >
                          Login
                        </Button>
                        <a className="btn btn-secondary" href="/">
                          Register
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
