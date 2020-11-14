import { combineReducers } from "redux";

const reducerOne = (state = [], action) => {
  if (action.type === "EXAMPLE") {
    return [...state, action.payload];
  }
  return state;
};

export default combineReducers({
  reducerOne,
});
