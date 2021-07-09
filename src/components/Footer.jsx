import React from "react";
import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <div className="row p-5">
      <div className="col-lg-3">
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link className="text-light">Contact</Nav.Link>
          <Nav.Link className="text-light">Books</Nav.Link>
          <Nav.Link className="text-light">About Us</Nav.Link>
          <Nav.Link className="text-light">FAQs</Nav.Link>
        </Nav>
      </div>
      <div className="col-lg-3">
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link className="text-light">Our Partners</Nav.Link>
          <Nav.Link className="text-light">Work for Us</Nav.Link>
          <Nav.Link className="text-light">Promotions</Nav.Link>
          <Nav.Link className="text-light">Blogs</Nav.Link>
        </Nav>
      </div>
      <div className="col-lg-3">
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link className="text-light">Location</Nav.Link>
          <Nav.Link className="text-light">Headquarters</Nav.Link>
          <Nav.Link className="text-light">History</Nav.Link>
          <Nav.Link className="text-light">Vision and Mision</Nav.Link>
        </Nav>
      </div>
      <div className="col-lg-3">
        <svg className="icon icon-footer">
          <use href="./icons/InlineSprite.svg#src-10"></use>
        </svg>
        <h1 className="text-light">Books Store</h1>
        <small className="text-light">All Rights Reserved 2021</small>
      </div>
    </div>
  );
}

export default Footer;
