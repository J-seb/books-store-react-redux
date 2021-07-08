import { cartActionTypes } from "../actionTypes/cartTypes";

// Two actions, update the array of cart to create a non existing item inside the cart list or
// Update some member of the list (add or remove a unit)
export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case cartActionTypes.update:
      const copyOfStateCart = [...state];

      const indexOfRepeatedBook = copyOfStateCart.findIndex(
        (element) => element._id === action.payload._id
      );

      if (indexOfRepeatedBook !== -1) {
        console.log(copyOfStateCart);

        copyOfStateCart[indexOfRepeatedBook].units =
          action.payload.action === "+"
            ? ++copyOfStateCart[indexOfRepeatedBook].units
            : --copyOfStateCart[indexOfRepeatedBook].units;
        console.log(copyOfStateCart);

        if (copyOfStateCart[indexOfRepeatedBook].units === 0) {
          copyOfStateCart.splice(indexOfRepeatedBook, 1);
        }

        return [...copyOfStateCart];
      } else {
        console.log("New Item Was Added");
        console.log([...copyOfStateCart, action.payload.newItem]);
        return [...copyOfStateCart, action.payload.newItem];
      }

    case cartActionTypes.clear:
      return [];

    default:
      return state;
  }
};
