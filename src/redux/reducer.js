import { combineReducers } from "redux";
import app from "./modules/app";
import books from "./modules/books";
import modal from "./modules/modal";
import categories from "./modules/categories";
import shelves from "./modules/shelves";

export default combineReducers({
  app,
  books,
  shelves,
  categories,
  modal
});
