import { selectShelf } from "redux/modules/shelves";

const modalMiddleware = store => next => action => {
    switch (action.type) {
        case "TOGGLE_MODAL": {
            if (action.name === 'bookDetails') {
                const {shelves} = store.getState();
                const selectedShelf = shelves.allShelves
                    .filter((shelf) => shelves.selectedShelf.name === shelf.name)[0];
                selectedShelf && store.dispatch(selectShelf(selectedShelf));
            }
            break;
        }
        default:
    }
    next(action);
};

export default modalMiddleware;
