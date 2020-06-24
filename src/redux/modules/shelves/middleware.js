import { setOnReview } from "redux/modules/app";

const shelvesMiddleware = store => next => action => {
    switch (action.type) {
        case "ADD_SHELF_REVIEW": {
            setTimeout(() => {
                const {shelves, app} = store.getState();
                const newSelectedShelf = shelves.allShelves.filter(shelf => app.onReview.name === shelf.name)[0];
                store.dispatch(setOnReview(newSelectedShelf));
            });
            break;
        }
        default:
    }
    next(action);
};

export default shelvesMiddleware;
