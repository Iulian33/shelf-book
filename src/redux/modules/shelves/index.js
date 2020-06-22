// @flow
import type { Book } from "redux/modules/books";

const ADD_SHELF = "ADD_SHELF";

export type Action = {
    type: typeof ADD_SHELF,
    shelf: string[]
}

export type Shelf = {
    name: string,
    category?: string,
    books: Book[]
}

export type State = {
    allShelves: Shelf[],
};

const initialState: State = {
    allShelves: []
};

export default function reducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case ADD_SHELF: {
            return {
                ...state,
                allShelves: [...state.allShelves, action.shelf]
            };
        }

        default: {
            return state;
        }
    }
}

export const addShelf = (shelf: Shelf): Action => ({
    type: ADD_SHELF,
    shelf
});
