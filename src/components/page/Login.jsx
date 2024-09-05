import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button, Alert } from 'reactstrap';

const SignupForm = () => {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de validation et de soumission du formulaire ici
  };

  return (
    <Container>
      <Row>
        <Col sm="6">
          <div className="form-box">
            <div className="form-top">
              <div className="form-top-left">
                <h3>Sign up now</h3>
                <p>Fill in the form below to get instant access:</p>
              </div>
            </div>
            <div className="form-bottom">
              {errors.length > 0 && (
                <Alert color="danger">
                  <strong>Whoops!</strong> There were some problems with your input.<br /><br />
                  <ul>
                    {errors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </Alert>
              )}
              <Form role="form" method="POST" onSubmit={handleSubmit}>
                <FormGroup>
                  <Input id="name" type="text" placeholder="Your Name" name="name" />
                </FormGroup>
                <FormGroup>
                  <Input id="username" type="text" placeholder="Username" name="username" />
                </FormGroup>
                <FormGroup>
                  <Input id="email" type="email" placeholder="E-Mail Address" name="email" />
                </FormGroup>
                <FormGroup>
                  <Input id="password" type="password" placeholder="Password" name="password" />
                </FormGroup>
                <FormGroup>
                  <Input id="password_confirmation" type="password" placeholder="Confirm Password" name="password_confirmation" />
                </FormGroup>
                <FormGroup>
                  <Button type="submit" color="success" size="lg" block>
                    <i className="fa fa-user-plus"></i> Register
                  </Button>
                </FormGroup>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupForm;
