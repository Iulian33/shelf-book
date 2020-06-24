import { setCategories } from "redux/modules/categories";
import { setOnReview } from "redux/modules/app";

const booksMiddleware = store => next => action => {
    switch (action.type) {
        case "GET_BOOKS": {
            setTimeout(() => {
                const {books} = store.getState();
                const categories = [];

                books.allBooks.forEach( book => {
                    book.categories.forEach(category => {
                        categories.indexOf(category) === -1 && categories.push(category)
                    });
                });

                store.dispatch(setCategories(categories));
            });
            break;
        }
        case "ADD_BOOK_REVIEW": {
            setTimeout(() => {
                const {books, app} = store.getState();
                const newSelectedBook = books.allBooks.filter((book) => app.onReview.id === book.id)[0];
                store.dispatch(setOnReview(newSelectedBook))
            });
            break;
        }
        default:
    }
    next(action);
};

export default booksMiddleware;
