import { categoryActionTypes } from "../actionTypes/categoryTypes";

// Only one action is required, to change the category string from aside of categories
export const categoryReducer = (state = "all", action) => {
  switch (action.type) {
    case categoryActionTypes.update:
      return action.payload.category;

    default:
      return state;
  }
};
