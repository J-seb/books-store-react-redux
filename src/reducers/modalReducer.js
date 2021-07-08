import { modalActionTypes } from "../actionTypes/modalTypes";

// Only one action is required, it toggle the state of the modal
export const modalReducer = (state = false, action) => {
  switch (action.type) {
    case modalActionTypes.toggle:
      return !state;

    default:
      return state;
  }
};
