import { modalActionTypes } from "../actionTypes/modalTypes";

// This action will only indicate a trigger of toggle the state of modal
export const modalToggle = () => {
  return {
    type: modalActionTypes.toggle,
  };
};
