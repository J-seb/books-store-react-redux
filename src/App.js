// Components
import NavTop from "./components/Nav";
import SideBar from "./components/Tab";
import Books from "./components/Books";
import Cart from "./components/Cart";
import ModalDetails from "./components/Modal";
import Footer from "./components/Footer";

// Sweet-Alert to success purchase
import Swal from "sweetalert2";

// Hooks from to manage react and redux
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// CSS styles and icons
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";

// Action creators to dispatch
import {
  getDataFromFirestore,
  updateAmountOfBooks,
  updateStockOfBooks,
} from "./actions/booksActions";

import { updateCategory } from "./actions/categoryActions";
import { modalToggle } from "./actions/modalActions";
import { setBookDetails } from "./actions/bookDetailsActions";
import { clearBooksFromCart, updateBooksFromCart } from "./actions/cartActions";
import { updateDoc } from "./utils/firebaseFirestoreMethods";

function App() {
  // Initialize dispatch, to save data inside store
  const dispatch = useDispatch();

  // Use selector to get data from store
  const books = useSelector((state) => state.books);
  const category = useSelector((state) => state.category);
  const showModal = useSelector((state) => state.modal);
  const actualBook = useSelector((state) => state.bookDetails);
  const cartArray = useSelector((state) => state.cart);

  // Fetching books from Firestore and save it to the store
  useEffect(() => {
    dispatch(getDataFromFirestore());
  }, [dispatch]);

  // To change the category filter
  const handleCategory = (e) => {
    dispatch(updateCategory(e.target.name));
  };

  // To manage modal state and put book details inside of it
  const handleShowModal = (book) => {
    dispatch(modalToggle());
    if (book) {
      dispatch(setBookDetails(book));
    }
  };

  // To manage books amount inside cart shopping
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

      dispatch(updateAmountOfBooks(action, _id));

      dispatch(updateBooksFromCart(action, _id, newItem));
    }
  };

  // To update store and firestore once a customer has purchase at least one book
  const onHandleBuy = () => {
    books.forEach((book) => {
      if (book.amountSelected !== 0) {
        updateDoc("books", book._id, {
          stock: book.stock - book.amountSelected,
        });
      }
    });

    dispatch(updateStockOfBooks());

    dispatch(clearBooksFromCart());

    Swal.fire({
      title: "Thanks for your purchase",
      text: "Operation was successful!",
      icon: "success",
      confirmButtonColor: "#003450",
    });
  };

  return (
    <div>
      <div className="row w-100 m-0 bg-nav-top">
        <NavTop />
      </div>
      <div className="row w-100 m-0 ">
        <div className="col-md-3 bg-tab-left">
          <SideBar category={(e) => handleCategory(e)} active={category} />
        </div>
        <div className="col-md-6 border-end border-start bg-books">
          <Books
            listOfBooks={books}
            category={category}
            modalControl={handleShowModal}
            handleCart={onHandleCart}
          />
        </div>
        <div className="col-md-3 bg-shopping-cart">
          <Cart cartItems={cartArray} handleBuy={onHandleBuy} />
        </div>
      </div>
      <ModalDetails
        modalControl={handleShowModal}
        show={showModal}
        book={actualBook}
      />
      <div className="row w-100 m-0 bg-nav-top">
        <Footer />
      </div>
    </div>
  );
}

export default App;
