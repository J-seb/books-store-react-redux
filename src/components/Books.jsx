import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Books({ listOfBooks, modalControl, handleCart }) {
  if (listOfBooks) {
    return (
      <>
        <div className="row py-3 px-4">
          <h5 className="text-dark">List of Books</h5>
          <hr />
          <div className="row gx-4 gy-4 m-0 p-0">
            {listOfBooks.map((book) => (
              <div className="col-md-6" id={book._id} key={book._id}>
                <Card className="p-3 shadow">
                  <Card.Img
                    variant="top"
                    src={book.image}
                    className="p-0 w-auto d-block mx-auto fixed-height"
                    onClick={() => modalControl(book)}
                  />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Title>{"$ " + book.price}</Card.Title>
                    <Card.Text className="mb-0 pb-0">{`Rating: ${book.rating}/5.0`}</Card.Text>
                    <Card.Text className="">{`In Stock: ${book.stock}`}</Card.Text>
                    <div className="d-flex justify-content-evenly align-items-center">
                      <Button
                        variant="success"
                        onClick={(e) => handleCart(book, e)}
                        name="-"
                        disabled={!book.amountSelected}
                      >
                        -
                      </Button>
                      <Button disabled variant="success">
                        {book.amountSelected}
                      </Button>
                      <Button
                        variant="success"
                        onClick={(e) => handleCart(book, e)}
                        name="+"
                        disabled={book.amountSelected === book.stock}
                      >
                        +
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  return <>No items yet</>;
}

export default Books;
