import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Checkout = () => {
  const [formStatus, setformStatus] = useState("");
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  };

  const onSubmit = (values) => {
    const data = values;

    axios
      .post("/api/users/", data)
      .then(function (response) {
        // console.log(typeof(response.data.success));
        if(response.data.success === 1 ) {
          setformStatus("Successfully registered your account");
        } else {
          setformStatus(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
        setformStatus(error.data.message);
      });
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    email: Yup.string().required("required").email("Invalid email format"),
    phone: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone No is not valid")
      .min(10, "Phone No Minimum 10 Digits")
      .max(10, "Phone No Minimum 10 Digits"),
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
                  <h2 className="pb-2 text-center text-primary">Register</h2>
                  <Row className="mb-3">
                    <Col md={6}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          First Name
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="firstname"
                          name="firstname"
                        />
                        <small className="text-danger">
                          <ErrorMessage name="firstname" />
                        </small>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">
                          Last Name
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="lastname"
                          name="lastname"
                        />
                        <small className="text-danger">
                          <ErrorMessage name="lastname" />
                        </small>
                      </div>
                    </Col>
                  </Row>
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
                        <label htmlFor="phone" className="form-label">
                          Phone No
                        </label>
                        <Field
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                        />
                        <small className="text-danger">
                          <ErrorMessage name="phone" />
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
                          Submit
                        </Button>
                        <a className="btn btn-secondary" href="/">
                          Login
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

export default Checkout;
