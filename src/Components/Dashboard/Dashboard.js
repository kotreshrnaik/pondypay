import React from "react";
import { Formik } from "formik";
import { Container, Form, Row, Col } from "react-bootstrap";
import axios from 'axios';

const Dashboard = () => {
  return (
    <div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
                <h2 className="pt-3 pb-3 text-center text-primary">Product Informations</h2>
              <Formik
                initialValues={{productTitle: "", price: "", price1: "", description: "", imgURL: "", alt: ""}}
                validate={(values) => {
                  const errors = {};
                  if (!values.productTitle) {
                    errors.productTitle = "Required";
                  }
                  if (!values.price) {
                    errors.price = "Required";
                  } 
                  if (!values.price1) {
                    errors.price1 = "Required";
                  } 
                  if (!values.description) {
                    errors.description = "Required";
                  } 
                  if (!values.imgURL) {
                      errors.imgURL = "Required";
                  }
                  if (!values.alt) {
                      errors.alt = "Required";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    const data = JSON.stringify(values, null, 2);
                    console.log(data);

                    axios
                        .post("http://localhost/react-projects/pondypay/Api/savedata.php", data)
                        .then((response) => {
                            console.log(response);
                        })
                        .catch((error) => {
                            console.log(error);
                        })

                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Product Title</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            name="productTitle"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.productTitle}
                          />
                          <Form.Text className="text-danger">
                            {errors.productTitle &&
                              touched.productTitle &&
                              errors.productTitle}
                          </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Price</Form.Label>
                          <Form.Control
                            placeholder="Enter Price"
                            type="tel"
                            name="price"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price}
                          />
                          <Form.Text className="text-danger">
                            {errors.price && touched.price && errors.price}
                          </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Price1</Form.Label>
                          <Form.Control
                            placeholder="Enter Price"
                            type="tel"
                            name="price1"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price1}
                          />
                          <Form.Text className="text-danger">
                            {errors.price1 && touched.price1 && errors.price1}
                          </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Image URL</Form.Label>
                          <Form.Control
                            placeholder="http://localhost/react-projects/pondypay/Api/images/"
                            type="text"
                            name="imgURL"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.imgURL}
                          />
                          <Form.Text className="text-danger">
                            {errors.imgURL && touched.imgURL && errors.imgURL}
                          </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Alt Text</Form.Label>
                          <Form.Control
                            placeholder="Alt Text"
                            type="text"
                            name="alt"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.alt}
                          />
                          <Form.Text className="text-danger">
                            {errors.alt && touched.alt && errors.alt}
                          </Form.Text>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Product Description</Form.Label>
                          <Form.Control
                            placeholder="Enter Description"
                            as="textarea" rows={15}
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                          />
                          <Form.Text className="text-danger">
                            {errors.description && touched.description && errors.description}
                          </Form.Text>
                        </Form.Group>
                      </Col>
                    </Row>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
