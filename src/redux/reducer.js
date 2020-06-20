import { combineReducers } from "redux";
import app from "./modules/app";
import books from "./modules/books";
import modal from "./modules/modal";

export default combineReducers({
  app,
  books,
  modal
});
