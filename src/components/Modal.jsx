import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// Modal component, it will be controled to show book details
function ModalDetails({ modalControl, show, book }) {
  return (
    <>
      <Modal
        show={show}
        onHide={(e) => modalControl(e)}
        size="lg"
        centered
        animation={false}
      >
        <Modal.Header>
          <div className="d-flex justify-content-start align-items-center my-1">
            <svg className="icon">
              <use href="./icons/InlineSprite.svg#src-6"></use>
            </svg>
            <Modal.Title className="px-3 py-1">Details of the Book</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="row p-3">
            <div className="col-4">
              <img src={book.image} alt={book.title} className="img-fluid" />
            </div>
            <div className="col-8">
              <div className="d-flex mb-2 justify-content-between">
                <h4 className="">{book.title}</h4>
                <h4>{`${book.rating}/5.0`}</h4>
              </div>

              <h5 className="mb-2">{`${book.author} - ${book.year}`}</h5>
              <p className="small mb-2">{`Pages: ${book.pages}`}</p>
              <p className="small mb-2">{`Publisher: ${book.publisher}`}</p>
              <p className="small mb-2">{book.description}</p>
              <h5 className="mb-2">{`Price: $${book.price}`}</h5>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={modalControl} className="mx-3 my-1 btn-color">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDetails;
