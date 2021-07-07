import React from "react";
import Nav from "react-bootstrap/Nav";
import genres from "../utils/genres";

function SideBar({ category, active }) {
  return (
    <div className="py-3 px-4">
      <h5 className="text-dark">Genres</h5>
      <hr />
      <div className="mh-100">
        <Nav className="flex-column" onClick={category} variant="pills">
          <Nav.Link
            name="all"
            eventKey="all"
            active={"all" === active}
            className="text-success"
          >
            All
          </Nav.Link>
          {genres.map((genre) => (
            <Nav.Link
              name={genre.id}
              eventKey={genre.id}
              key={genre.id}
              active={genre.id === active}
              className="text-success"
            >
              {genre.name}
            </Nav.Link>
          ))}
        </Nav>
      </div>
    </div>
  );
}

export default SideBar;
