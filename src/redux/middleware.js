// @flow

import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import booksMiddleware from "./modules/books/middleware";

const middleware = [
  thunk,
  booksMiddleware
];

export default composeWithDevTools(applyMiddleware(...middleware));
