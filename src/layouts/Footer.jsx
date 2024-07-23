import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md="4">
            <h5>About Us</h5>
            <p>
              We are a company dedicated to providing the best service to our customers.
            </p>
          </Col>
          <Col md="4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">About</a></li>
              <li><a href="#services" className="text-white">Services</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md="4">
            <h5>Contact Us</h5>
            <address>
              1234 Street Name<br />
              City, State, 56789<br />
              Email: <a href="mailto:info@company.com" className="text-white">info@company.com</a><br />
              Phone: <a href="tel:+1234567890" className="text-white">+1 234 567 890</a>
            </address>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
