import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// This nav is for decorative purposes but it can be used for adding more features to the app
function NavTop(props) {
  return (
    <>
      <Navbar
        bg="success"
        variant="dark"
        className=" justify-content-between align-items-center"
      >
        <Navbar.Brand href="#home">
          <i className="fa fa-book icons-nav" aria-hidden="true"></i>
          Book Store
        </Navbar.Brand>

        <Nav className="">
          <Nav.Link href="#home">
            <i className="fa fa-user-o icons-nav" aria-hidden="true"></i>
            User
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavTop;
