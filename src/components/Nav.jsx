import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// This nav is for decorative purposes but it can be used for adding more features to the app
function NavTop(props) {
  return (
    <>
      <Navbar
        variant="dark"
        className=" justify-content-between align-items-center"
      >
        <Navbar.Brand href="#home">
          <svg className="icon">
            <use href="./icons/InlineSprite.svg#src-10"></use>
          </svg>
          Books Store
        </Navbar.Brand>

        <Nav className="">
          <Nav.Link href="#home">
            <svg className="icon">
              <use href="./icons/InlineSprite.svg#src-7"></use>
            </svg>
            Juan
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavTop;
