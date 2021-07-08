import { bookDetailsActionTypes } from "../actionTypes/bookDetailsTypes";

// Action to set the book details into the store
export const setBookDetails = (book) => {
  return {
    type: bookDetailsActionTypes.set,
    payload: {
      book,
    },
  };
};
