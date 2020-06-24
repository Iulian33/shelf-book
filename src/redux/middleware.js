// @flow

import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import booksMiddleware from "./modules/books/middleware";
import modalMiddleware from "./modules/modal/middleware";

const middleware = [
  thunk,
  booksMiddleware,
  modalMiddleware
];

export default composeWithDevTools(applyMiddleware(...middleware));
