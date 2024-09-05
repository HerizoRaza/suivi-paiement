import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button, Alert, FormText, Label} from 'reactstrap';

const LoginForm = () => {
  const [errors, setErrors] = useState({});
  const [messageLogin, setMessageLogin] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de validation et de soumission du formulaire ici
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col sm="8" md="6" lg="4">
          <div className="form-box">
            <div className="form-top">
              <div className="form-top-left">
                <h3>Login to our site</h3>
                <p>Entrez le nom d'utilisateur et le mot de passe pour vous connecter:</p>
              </div>
            </div>
            <div className="form-bottom clearfix">
              {messageLogin && (
                <Alert color="danger" toggle={() => setMessageLogin(null)}>
                  {messageLogin}
                </Alert>
              )}
              <Form role="form" method="POST" onSubmit={handleSubmit}>
                <FormGroup className={errors['login-username'] ? 'has-error' : ''}>
                  <Input type="text" placeholder="Username" name="login-username" />
                  {errors['login-username'] && (
                    <FormText color="danger">
                      {errors['login-username']}
                    </FormText>
                  )}
                </FormGroup>

                <FormGroup className={errors['login-password'] ? 'has-error' : ''}>
                  <Input type="password" placeholder="Password" name="login-password" />
                  {errors['login-password'] && (
                    <FormText color="danger">
                      {errors['login-password']}
                    </FormText>
                  )}
                </FormGroup>

                <FormGroup>
                  <Input type="checkbox" id="remember" label="Remember Me" />
                </FormGroup>

                <FormGroup>
                  <Button type="submit" href="/starter" color="primary" size="lg" block>
                    <i className="fa fa-sign-in"></i> Sign in!
                  </Button>
                  <br />
                  <a className="float-right" href="#">Forgot Your Password?</a>
                </FormGroup>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
