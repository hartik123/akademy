import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Col, FormGroup } from "react-bootstrap";
import "./styles/Signup.css";
const Signup = () => {
  return (
    <div className="signup-container">
      <Form>
        <Form.Row>
          <Col>
            <Form.Label className="signup-title">Registeration Form</Form.Label>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Control className="signup-inputs" placeholder="First name" />
          </Col>
          <Col>
            <Form.Control className="signup-inputs" placeholder="Middle Name" />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Control
              type="text"
              className="signup-inputs"
              placeholder="Last Name"
            />
          </Col>
        </Form.Row>
        {/* <Form.Row>
          <Col>
            <Form.Control
              className="signup-inputs"
              placeholder="Enter your email"
            />
          </Col>
        </Form.Row> */}
        <Form.Row>
          <Col>
            <Form.Control
              className="signup-inputs"
              type="date"
              placeholder=" D.O.B"
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Control
              className="signup-inputs"
              type="text"
              placeholder="Enter your email"
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Control
              className="signup-inputs"
              type="password"
              placeholder="Set password"
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Button type="submit" varient="primary">
              Submit
            </Button>
          </Col>
          <Col>
            <Button type="reset" varient="primary">
              Reset
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
};
export default Signup;
