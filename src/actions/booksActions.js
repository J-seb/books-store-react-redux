import { booksActionTypes } from "../actionTypes/booksTypes";
import { readAllDocs } from "../utils/firebaseFirestoreMethods";

// Using middleware and thunk to get async data from firestore and save it inside the store
export const getDataFromFirestore = () => {
  return async (dispatch) => {
    const result = await readAllDocs("books");
    const docs = result.docs.map((doc) => doc.data());
    return dispatch(getBooks(docs));
  };
};

// Dummy functioon tho get data from dummy array inside books.js
export const getBooks = (books) => {
  return {
    type: booksActionTypes.get,
    payload: {
      books,
    },
  };
};

// To update stock of books we don't need pass a payload
export const updateStockOfBooks = () => {
  return {
    type: booksActionTypes.updateStock,
  };
};

// To update the amount of books we need to pass the id of the doc
export const updateAmountOfBooks = (action, _id) => {
  return {
    type: booksActionTypes.updateAmount,
    payload: {
      action,
      _id,
    },
  };
};
