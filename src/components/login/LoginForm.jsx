import React from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import logo from "../../img/logo.png";

const LoginForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

const Login = () => {
  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <Card className="shadow p-4">
            <div className="text-center">
              <img
                src={logo}
                alt="Logo"
                style={{ maxWidth: "480px", maxHeight: "250px" }}
                className="img-fluid mb-3"
              />
              <h2 className="fw-bold text-uppercase">Tu Profe particular</h2>
              <p className="mb-4">Please enter your login and password!</p>
            </div>
            <LoginForm />
            <div className="mt-3 text-center">
              <p className="mb-0">
                Don't have an account?{" "}
                <a href="{''}" className="text-primary fw-bold">
                  Sign Up
                </a>
              </p>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
