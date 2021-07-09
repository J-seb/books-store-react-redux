import React from "react";
import Nav from "react-bootstrap/Nav";
import genres from "../utils/genres";

// This sidebar use the genres array to filter and select the category
function SideBar({ category, active }) {
  return (
    <div className="py-3 px-4">
      <div className="d-flex mt-2">
        <svg className="icon">
          <use href="./icons/InlineSprite.svg#src-5"></use>
        </svg>
        <h5 className="text-dark">Genres</h5>
      </div>

      <hr />
      <div className="mh-100">
        <Nav
          className="flex-column my-tab"
          onClick={category}
          variant="pills"
          bg="dark"
        >
          <Nav.Link
            name="all"
            eventKey="all"
            active={"all" === active}
            className="text-dark"
          >
            All
          </Nav.Link>
          {genres.map((genre) => (
            <Nav.Link
              name={genre.id}
              eventKey={genre.id}
              key={genre.id}
              active={genre.id === active}
              className="text-dark"
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
