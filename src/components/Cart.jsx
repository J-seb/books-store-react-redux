import React from "react";
import TableOfProducts from "./Table";
import Card from "react-bootstrap/Card";

// Cart component to render some elements of the right side of the screen, including table component
function Cart({ cartItems, handleBuy }) {
  return (
    <div className="py-3 px-4">
      <span className="d-flex justify-content-center align-items-center my-1">
        <svg className="icon">
          <use href="./icons/InlineSprite.svg#src-8"></use>
        </svg>
        <h5 className="m-0">Your Shopping Cart</h5>
      </span>
      <hr />
      <TableOfProducts cartItems={cartItems} />
      <button
        className="btn btn-sm btn-color text-light"
        onClick={handleBuy}
        disabled={!cartItems.length}
      >
        Buy
      </button>

      <Card className="p-3 card-author mt-5">
        <Card.Img
          variant="top"
          src="./images/GRRMW.webp"
          className="p-0 d-block mx-auto custom-image"
        />
        <Card.Body>
          <figure className="text-end">
            <blockquote className="blockquote">
              <p className="line-height">
                A reader lives a thousand lives before he dies... The man who
                never reads lives only one.
              </p>
            </blockquote>
            <figcaption className="blockquote-footer mt-2">
              George R. R. Martin.
              <cite title="Source Title"> A Song of Ice and Fire</cite>
            </figcaption>
          </figure>
        </Card.Body>
        <svg className="icon float-icon">
          <use href="./icons/InlineSprite.svg#src-1"></use>
        </svg>
        <svg className="icon icon-medal">
          <use href="./icons/InlineSprite.svg#src-4"></use>
        </svg>
      </Card>
    </div>
  );
}

export default Cart;
