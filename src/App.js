import NavTop from "./components/Nav";
import SideBar from "./components/Tab";
import Books from "./components/Books";
import Cart from "./components/Cart";
import ModalDetails from "./components/Modal";

import Swal from "sweetalert2";

import { useState, useEffect } from "react";

import initialBooks from "./books";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";

function App() {
  // Use State
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [actualBook, setActualBook] = useState({});

  const [cartArray, setCartArray] = useState([]);

  // Use Effect
  useEffect(() => {
    const arrayWithAmountSelected = initialBooks.map((book) => ({
      ...book,
      amountSelected: 0,
    }));
    setBooks([...arrayWithAmountSelected]);
    setCategory({ name: "all", books: [...arrayWithAmountSelected] });
  }, []);

  //Complementary Functions
  const handleCategory = (e) => {
    if (e.target.name === "all") {
      setCategory({
        name: e.target.name,
        books,
      });
    } else {
      const booksFiltered = books.filter(
        (book) => book.genre === e.target.name
      );
      setCategory({
        name: e.target.name,
        books: booksFiltered,
      });
    }
  };

  const handleShowModal = (book) => {
    if (book) {
      setActualBook({ ...book });
    }
    setShowModal(!showModal);
  };

  const onHandleCart = (book, e) => {
    let newItem;
    const action = e.target.name;

    if (book) {
      const { _id, title, price } = book;

      newItem = {
        _id,
        title,
        price,
        units: 1,
      };

      const copyOfStateBooks = [...books];
      const indexOfSelectedBook = copyOfStateBooks.findIndex(
        (element) => element._id === book._id
      );

      copyOfStateBooks[indexOfSelectedBook].amountSelected =
        action === "+"
          ? copyOfStateBooks[indexOfSelectedBook].amountSelected + 1
          : copyOfStateBooks[indexOfSelectedBook].amountSelected - 1;

      setCartArray([...copyOfStateBooks]);

      if (cartArray.length !== 0) {
        const copyOfStateCart = [...cartArray];
        const indexOfRepeatedBook = copyOfStateCart.findIndex(
          (element) => element._id === book._id
        );

        if (indexOfRepeatedBook !== -1) {
          copyOfStateCart[indexOfRepeatedBook].units =
            action === "+"
              ? copyOfStateCart[indexOfRepeatedBook].units + 1
              : copyOfStateCart[indexOfRepeatedBook].units - 1;

          const zeroFilteredArray = filterCart(copyOfStateCart);
          setCartArray([...zeroFilteredArray]);
        } else {
          const zeroFilteredArray = filterCart(copyOfStateCart);
          setCartArray([...zeroFilteredArray, newItem]);
        }
      } else {
        setCartArray([...cartArray, newItem]);
      }
    }
  };

  const filterCart = (array) => {
    return array.filter((item) => item.units !== 0);
  };

  const onHandleBuy = () => {
    const newArrayOfBooks = books.map((book) => ({
      ...book,
      stock: book.stock - book.amountSelected,
      amountSelected: 0,
    }));

    setBooks([...newArrayOfBooks]);
    setCategory({ name: "all", books: [...newArrayOfBooks] });

    Swal.fire({
      title: "Thanks for your purchase",
      text: "Operation was successful!",
      icon: "success",
    });

    setCartArray([]);
  };

  return (
    <div>
      <div className="row w-100 m-0">
        <NavTop />
      </div>
      <div className="row w-100 m-0">
        <div className="col-md-3">
          <SideBar category={(e) => handleCategory(e)} active={category.name} />
        </div>
        <div className="col-md-6 border-end border-start">
          <Books
            listOfBooks={category.books}
            modalControl={handleShowModal}
            handleCart={onHandleCart}
          />
        </div>
        <div className="col-md-3">
          <Cart cartItems={cartArray} handleBuy={onHandleBuy} />
        </div>
      </div>
      <ModalDetails
        modalControl={handleShowModal}
        show={showModal}
        book={actualBook}
      />
    </div>
  );
}

export default App;
