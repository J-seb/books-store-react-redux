import React from "react";
import TableOfProducts from "./Table";

function Cart({ cartItems, handleBuy }) {
  return (
    <div className="py-3 px-4">
      <span className="d-flex justify-content-center align-items-center">
        <i
          className="fa fa-shopping-cart fa-2x cart-icon"
          aria-hidden="true"
        ></i>
        <h5 className="m-0">Your Shopping Cart</h5>
      </span>
      <hr />
      <TableOfProducts cartItems={cartItems} />
      <button
        className="btn btn-sm btn-success"
        onClick={handleBuy}
        disabled={!cartItems.length}
      >
        Buy
      </button>
    </div>
  );
}

export default Cart;
