import { Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <>
      <Navbar
        style={{ zIndex: 1, position: "sticky", top: 0 }}
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="#home">Akademy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Signup">SignUp</Nav.Link>
            <Nav.Link href="/Examentry">Examentry</Nav.Link>
            <Nav.Link href="/Mcqtest">Mcqtest</Nav.Link>
            <Nav.Link href="/Squads">Squads</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
