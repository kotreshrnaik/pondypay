import React from "react";
import { Row, Form, Col, Container, Button } from "react-bootstrap";
import UseForm from '../ContactFrom/UseForm';
import Validation from '../ContactFrom/Validation';


const Contact = () => {

  const { handleChange, values, handleSubmit, errors, mailStatus} = UseForm(Validation);
    
  return (
    <div>
      <div id="about-us" className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Contact us</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="contact" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={7}>
              <h3 className="text-primary">Have you any question?</h3>
              <p>
                If you have any query or want to leave a comment about our
                products & services, drop a message or fill the form below.
              </p>
              <Form
                onSubmit={handleSubmit}
              >
                <Row>
                  <Col md={6}>
                    <Form.Group className="pb-5">
                      <Form.Control
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Name*"
                      />
                      {errors.name && <small className="text-danger">{errors.name}</small>}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="pb-5" controlId="formBasicEmail">
                      <Form.Control
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email*"
                      />
                      {errors.email && <small className="text-danger">{errors.email}</small>}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="pb-5" controlId="formBasicEmail">
                      <Form.Control
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        type="text"
                        placeholder="Phone*"
                      />
                      {errors.phone && <small className="text-danger">{errors.phone}</small>}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="pb-5" controlId="formBasicEmail">
                      <Form.Control
                        name="subject"
                        value={values.subject}
                        onChange={handleChange}
                        type="text"
                        placeholder="Subject*"
                      />
                      {errors.subject && <small className="text-danger">{errors.subject}</small>}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group
                      className="pb-5"
                      controlId="exampleForm.ControlTextarea1 "
                    >
                      <Form.Control
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        as="textarea"
                        placeholder="Message*"
                        rows={8}
                      />
                      {errors.message && <small className="text-danger">{errors.message}</small>}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div id="mail-status">
                      {mailStatus ? (
                        <p className="alert alert-success p-3 text-center">{mailStatus} </p>
                      ) : null}
                    </div>
                    <div className="">
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col md={5} className="align-self-center">
              <div className="bg-primary rounded text-white">
                <div className="p-3 pt-md-5 pb-md-5 ps-md-5 pe-md-5">
                  <Row>
                    <Col md={2} xs={2} className="align-self-center">
                      <div className="text-center">
                        <i className="fas fa-map-marker-alt text-white fs-3"></i>
                      </div>
                    </Col>
                    <Col md={10} xs={10}>
                      <h3 className="text-white">Our Address</h3>
                      <p className="lh-base">
                        10/199 Shivanahalli, Jakkur Main Road,
                        <br /> Yelahanka, Bengaluru-560064.
                        
                      </p>
                    </Col>
                  </Row>
                </div>
                <div className="p-3 pt-md-0 pb-md-5 ps-md-5 pe-md-5">
                  <Row>
                    <Col md={2} xs={2} className="align-self-center">
                      <div className="text-center">
                        <i className="far fa-clock text-white fs-3"></i>
                      </div>
                    </Col>
                    <Col md={10} xs={10}>
                      <h3 className="text-white">Office Hours</h3>
                      <p className="lh-base">
                        MON - FRIDAY : 8 to 9 PM
                        <br /> SAT - SUN : 10 to 8 PM
                      </p>
                    </Col>
                  </Row>
                </div>
                <div className="p-3 pt-md-0 pb-md-5 ps-md-5 pe-md-5">
                  <Row>
                    <Col md={2} xs={2} className="align-self-center">
                      <div className="text-center">
                        <i className="fas fa-mobile-alt text-white fs-3"></i>
                      </div>
                    </Col>
                    <Col md={10} xs={10}>
                      <h3 className="text-white">Contact</h3>
                      <p className="lh-base">
                        <strong> Phone: </strong>+91 96062 89999 <br />
                        <strong>E-Mail: </strong> grademaxconcrete@gmail.com
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
