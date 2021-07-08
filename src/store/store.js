// Import all redux tools to create store, combine reducers, use of middleware and compose enhancer
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

// Importing of all reducers (each reducer manages a piece of the store)
import { bookDetailsReducer } from "../reducers/bookDetailsReducer";
import { booksReducer } from "../reducers/booksReducer";
import { cartReducer } from "../reducers/cartReducer";
import { categoryReducer } from "../reducers/categoryReducer";
import { modalReducer } from "../reducers/modalReducer";

// Thunk for async functions, specially for APIs requests.
import thunk from "redux-thunk";

// Combining all reducers to get only one.
const reducers = combineReducers({
  books: booksReducer,
  category: categoryReducer,
  modal: modalReducer,
  bookDetails: bookDetailsReducer,
  cart: cartReducer,
});

// Enhancers to apply redux devtools and middleware at the same time
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// Creating of store with the big reducer and enhancers
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
