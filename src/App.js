import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Squads from "./components/Squads";
import Mcqtest from "./components/Mcqtest";
import Examentry from "./components/Examentry";
import Navigation from "./components/navbar";
import { BrowserRouter, Route } from "react-router-dom";
import backgroundImage from "./components/images/BackgroundImage.jpg";
function App() {
  return (
    <div
      className="App bg"
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Navigation />

      <>
        <BrowserRouter>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>
          <Route exact path="/Squads">
            <Squads />
          </Route>
          <Route exact path="/Mcqtest">
            <Mcqtest />
          </Route>
          <Route exact path="/Examentry">
            <Examentry />
          </Route>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
