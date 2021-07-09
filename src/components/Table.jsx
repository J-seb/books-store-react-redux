import React from "react";

function TableOfProducts({ cartItems }) {
  // To get the total price of the list
  const getTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total = total + item.units * item.price;
    });
    return total.toFixed(2);
  };

  return (
    <>
      <table className="table table-hover table-sm custom-table">
        <thead>
          <tr>
            <th scope="col" className="small">
              #
            </th>
            <th scope="col" className="small">
              Name
            </th>
            <th scope="col" className="small">
              Units
            </th>
            <th scope="col" className="small">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((product, n) => (
            <tr key={n}>
              <th scope="row" className="small">
                {n + 1}
              </th>
              <td className="small">{product.title}</td>
              <td className="small">{product.units}</td>
              <td className="small">{`$${product.price}`}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" className="small border-tfoot" colSpan="3">
              Total
            </th>
            <td className="small border-tfoot">{`$${getTotal()}`}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
export default TableOfProducts;
