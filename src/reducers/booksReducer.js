import { booksActionTypes } from "../actionTypes/booksTypes";

// Book reducer to manage actions of get all books from firestore to store, update the stock number
// once a purchase was effectuated, and anoter update ammount of the books selected before a buy is
// realized

export const booksReducer = (state = [], action) => {
  switch (action.type) {
    case booksActionTypes.get:
      const arrayWithAmountField = action.payload.books.map((book) => ({
        ...book,
        amountSelected: 0,
      }));
      return arrayWithAmountField;

    case booksActionTypes.updateStock:
      const arrayUpdatedStock = state.map((book) => ({
        ...book,
        stock: book.stock - book.amountSelected,
        amountSelected: 0,
      }));
      return arrayUpdatedStock;

    case booksActionTypes.updateAmount:
      const copyOfStateBooks = [...state];
      const indexOfSelectedBook = copyOfStateBooks.findIndex(
        (element) => element._id === action.payload._id
      );

      copyOfStateBooks[indexOfSelectedBook].amountSelected =
        action.payload.action === "+"
          ? copyOfStateBooks[indexOfSelectedBook].amountSelected + 1
          : copyOfStateBooks[indexOfSelectedBook].amountSelected - 1;

      return copyOfStateBooks;

    default:
      return state;
  }
};
