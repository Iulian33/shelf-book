import { combineReducers } from "redux";
import app from "./modules/app";
import books from "./modules/books";

export default combineReducers({
  app,
  books
});
