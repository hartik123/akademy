import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Navbar } from "react-bootstrap";
import "./styles/Login.css";

const Login = () => {
  return (
    <>
      <div className="container">
        <Form>
          <Form.Label className="title">LOGIN</Form.Label>
          <Form.Control
            className="inputs"
            type="email"
            placeholder="Enter your email"
          />

          <Form.Control
            className="inputs"
            type="password"
            placeholder="Password"
          />

          <Button variant="primary">LogIn</Button>
        </Form>
      </div>
    </>
  );
};
export default Login;
