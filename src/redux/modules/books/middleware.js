import { setCategories } from "redux/modules/categories";

const booksMiddleware = store => next => action => {
    switch (action.type) {
        case "GET_BOOKS": {
            console.log('loaded');
            const {books} = store.getState();
            const categories = [];

            setTimeout(() => {
                books.allBooks.forEach((book) => {
                    book.categories.forEach((category) => {
                        if (categories.indexOf(category) === -1) categories.push(category)
                    });
                });
            });

            store.dispatch(setCategories(categories));
            break;
        }
        default:
    }
    next(action);
};

export default booksMiddleware;
