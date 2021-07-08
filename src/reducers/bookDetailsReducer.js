import { bookDetailsActionTypes } from "../actionTypes/bookDetailsTypes";

// One action to put into the store, the book details from the book selected
export const bookDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case bookDetailsActionTypes.set:
      return action.payload.book;
    default:
      return state;
  }
};
