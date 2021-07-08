import { categoryActionTypes } from "../actionTypes/categoryTypes";

// Object with the update of category and the category selected
export const updateCategory = (category) => {
  return {
    type: categoryActionTypes.update,
    payload: {
      category,
    },
  };
};
