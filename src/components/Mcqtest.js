import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Card, Button } from "react-bootstrap";

const Mcqtest = () => {
  const [counter, setCounter] = useState(120);

  return (
    <>
      <center>
        <div
          style={{
            backgroundColor: "white",
            textAlign: "justify",
            border: "solid 1px",
            width: "50%",
            marginTop: "10%",
            padding: "2%",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            borderRadius: "2vh",
          }}
        >
          <p>
            <h4>Which of the folllowingis not an OS</h4>
          </p>
          <h6>
            <input type="radio" name="answer"></input>a Windows
            <br />
          </h6>
          <h6>
            <input type="radio" name="answer"></input>b Ununtu
            <br />
          </h6>
          <h6>
            <input type="radio" name="answer"></input>c Firebase
          </h6>
          <br />
          <Button varient="primary">Next</Button>
          <br />
          {counter}
        </div>
      </center>
    </>
  );
};
export default Mcqtest;
