import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Slide1 from "../../Images/Gallery/image-1.png";

const About = () => {
  return (
    <div>
      <div id="about-us" className="bg-secondary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">About</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={8} className="align-self-center">
              <h3 className="text-center text-secondary">
                AT CREATIVE INTERIORS
              </h3>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </Col>
            <Col md={4} className="align-self-center">
              <Image
                src={Slide1}
                alt="Slide 1"
                className="img-fluid rounded shadow-sm"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="bg-white shadow p-3 rounded">
                <h2 className="pb-2 text-center text-secondary">Our Mision</h2>
                <div className="text-center text-secondary">
                  <i className="fas fa-bullseye fs-1 pb-2"></i>
                </div>
                <p className="pt-2 text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="bg-white shadow p-3 rounded">
                <h2 className="pb-2 text-center text-secondary">
                  Our Vision
                </h2>
                <div className="text-center text-secondary">
                  <i className="fas fa-bullseye fs-1 pb-2"></i>
                </div>
                <p className="pt-2 text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <h2 className="text-center text-secondary pt-2 pb-2">Our Team</h2>
          
          <Row className="justify-content-center m-1">
            <Col ms={10}>
              <div className="">
                <p className="text-center">
                  At Creative Interiors, our integrated interior design team
                  collaborates throughout the design process for each individual
                  project. All of our team member bring a unique skill set and
                  perspective to the final design solution. Our hands-on
                  approach to design ensures that our team utilizes their skills
                  and creative vision to produce memorable, unique, and timeless
                  designs for our clients.
                </p>
                <p className="text-center">
                  Our trusted design team is composed of designers with a wide
                  range of experience and expertise. The Creative Interiors Team
                  continues to work closely with our clients to create
                  one-of-a-kind design solutions tailored specifically to each
                  client.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center pt-2 pb-2 m-1">
            <Col md={4}>
              <div className="">
                <Card className="shadow">
                  <Card.Body>
                    <Card.Title className="text-center text-primary fw-bold">
                      Name
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-dark text-center">
                      Director
                    </Card.Subtitle>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md={4}>
              <div className="">
                <Card className="shadow">
                  <Card.Body>
                    <Card.Title className="text-center text-primary fw-bold">
                      Name
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-dark text-center">
                      Director
                    </Card.Subtitle>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
    </div>
  );
};

export default About;
