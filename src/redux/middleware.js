// @flow
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import modalMiddleware from "./modules/modal/middleware";
import booksMiddleware from "./modules/books/middleware";
import shelvesMiddleware from "./modules/shelves/middleware";

const middleware = [
  thunk,
  modalMiddleware,
  booksMiddleware,
  shelvesMiddleware
];

export default composeWithDevTools(applyMiddleware(...middleware));
