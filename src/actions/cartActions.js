import { cartActionTypes } from "../actionTypes/cartTypes";

// Action to update the array, adding a new item to the list or adding/removing a unit from a
// existing element inside the table
export const updateBooksFromCart = (action, _id, newItem) => {
  return {
    type: cartActionTypes.update,
    payload: {
      _id,
      action,
      newItem,
    },
  };
};

// Action to clear the shopping list if a book have 0 units
export const clearBooksFromCart = () => {
  return {
    type: cartActionTypes.clear,
  };
};
