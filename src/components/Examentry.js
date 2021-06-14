import React from "react";
import Webcam from "react-webcam";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Navbar, Form, FormControl, Button } from "react-bootstrap";

const Examentry = () => {
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <div>
          <Webcam />
        </div>
        <br />
        <Button variant="primary">Capture</Button>
      </div>
    </>
  );
};
export default Examentry;
