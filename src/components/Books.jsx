import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

function Books({ listOfBooks, modalControl, handleCart, category }) {
  // If we have some books, we will do filtering of books and rendering
  if (listOfBooks.length !== 0) {
    let booksFiltered;
    if (category !== "all") {
      booksFiltered = listOfBooks.filter((book) => book.genre === category);
    } else {
      booksFiltered = listOfBooks;
    }
    return (
      <>
        <div className="row py-3 px-4">
          <div className="d-flex justify-content-start align-items-center my-1">
            <svg className="icon">
              <use href="./icons/InlineSprite.svg#src-9"></use>
            </svg>
            <h5 className="text-dark">List of Books</h5>
          </div>
          <hr />
          <div className="row gx-4 gy-4 m-0 p-0">
            {booksFiltered.map((book) => (
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
                        className="btn-color"
                        onClick={(e) => handleCart(book, e)}
                        name="-"
                        disabled={!book.amountSelected}
                      >
                        -
                      </Button>
                      <Button disabled className="btn-color">
                        {book.amountSelected}
                      </Button>
                      <Button
                        className="btn-color"
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
  // If we haven't books yet from firestore, we will render a spinner to indicate the load of data to the screen
  return (
    <div className="d-flex justify-content-center mt-5">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Books;
