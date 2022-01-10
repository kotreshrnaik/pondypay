import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterLogo from "../../Images/footer-logo.png";



const Footer = () => {
  return (
    <div>
      <div id="footer" className="pt-2 pb-2 pt-md-2 pb-md-2 bg-dark text-light">
        <Container>
          <Row>
            <Col md={3} className="align-self-center">
              <div className="text-center">
                <Image src={FooterLogo} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col md={3}>
              <div className="">
                <h2 className="pt-2 pb-2">Quick Links</h2>
                <ul>
                  <li>
                    <Link to="/">Latest Events</Link>
                  </li>
                  <li>
                    <Link to="/">Terms and conditions</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Career</Link>
                  </li>
                  <li>
                    <Link to="/">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3}>
              <h2 className="pt-2 pt-2">Latest Posts</h2>
              <ul>
                <li>
                  <Link to="/"></Link>Lorem Ipsum
                </li>
                <li>
                  <Link to="/"></Link>Lorem Ipsum
                </li>
                <li>
                  <Link to="/"></Link>Lorem Ipsum
                </li>
                
              </ul>
            </Col>
            <Col md={3}>
              <h2 className="pt-2 pb-2 text-center text-md-start">
                Recent News
              </h2>
              <ul>
                <li>
                  <Link to="/"></Link>Lorem Ipsum
                </li>
                <li>
                  <Link to="/"></Link>Lorem Ipsum
                </li>
                <li>
                  <Link to="/"></Link>Lorem Ipsum
                </li>
                
              </ul>
            </Col>
          </Row>
          <div className="border-top border-light">
            <Row>
              <Col md={12}>
                <p className="text-center text-light m-0 pt-2 pb-1">
                  Copy Rights reserved by Pondy Bay. Developed by{" "}
                  <a href="https://shanthaswebz.com" target="_blank" rel="noopener noreferrer">
                    Shanthas Webz.
                  </a>
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
