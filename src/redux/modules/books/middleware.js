import { setCategories } from "redux/modules/categories";
import { setSelectedBook } from "redux/modules/books/index";

const booksMiddleware = store => next => action => {
    switch (action.type) {
        case "GET_BOOKS": {
            setTimeout(() => {
                const {books} = store.getState();
                const categories = [];

                books.allBooks.forEach( book => {
                    book.categories.forEach(category => {
                        if (categories.indexOf(category) === -1) categories.push(category)
                    });
                });

                store.dispatch(setCategories(categories));
            });

            break;
        }
        case "ADD_BOOK_REVIEW": {
            setTimeout(() => {
                const {books} = store.getState();
                const newSelectedBook = books.allBooks.filter((book) => books.selectedBook.id === book.id)[0];
                store.dispatch(setSelectedBook(newSelectedBook))
            });
            break;
        }
        default:
    }
    next(action);
};

export default booksMiddleware;
