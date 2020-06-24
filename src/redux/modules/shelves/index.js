// @flow
import type { Book, Review } from "redux/modules/books";

const ADD_SHELF = "ADD_SHELF";
const ADD_SHELF_REVIEW = "ADD_SHELF_REVIEW";
const TOGGLE_BOOK_TO_SHELF = "TOGGLE_BOOK_TO_SHELF";
const SELECT_SHELF = "SELECT_SHELF";

export type Shelf = {
    name: string,
    category?: string,
    books: Book[],
    reviews: Review[]
}

export type Action =
      { type: typeof ADD_SHELF, shelf: Shelf }
    | { type: typeof ADD_SHELF_REVIEW, name: string, message: string, shelfName: string }
    | { type: typeof TOGGLE_BOOK_TO_SHELF, bookID: number, shelfName: string, toggle: boolean }
    | { type: typeof SELECT_SHELF, shelf: Shelf }

export type State = {
    allShelves: Shelf[],
    selectedShelf: Shelf
};

const initialState: State = {
    allShelves: [],
    selectedShelf: {}
};

export default function reducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case ADD_SHELF: {
            return {
                ...state,
                allShelves: [...state.allShelves, action.shelf]
            };
        }
        case ADD_SHELF_REVIEW: {
            const newShelves = state.allShelves.map((shelf) => {
                if (action.shelfName === shelf.name) {
                    return {
                        ...shelf,
                        reviews: [
                            ...shelf.reviews, {
                                name: action.name,
                                message: action.message
                            }
                        ]
                    }
                }
                return shelf;
            });
            return {
                ...state,
                allShelves: newShelves
            };
        }
        case TOGGLE_BOOK_TO_SHELF: {
            const newShelves = state.allShelves.map((shelf) => {
                if (action.shelfName === shelf.name) {
                    let books = [
                        ...shelf.books,
                        action.bookID
                    ];
                    if (!action.toggle) {
                        books = shelf.books.filter((bookId) => bookId !== action.bookID);
                    }
                    return {
                        ...shelf,
                        books
                    }
                }
                return shelf;
            });

            return {
                ...state,
                allShelves: newShelves
            };
        }
        case SELECT_SHELF: {
            return {
                ...state,
                selectedShelf: action.shelf
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

export const addShelfReview = (name: string, message: string, shelfName: string): Action => ({
    type: ADD_SHELF_REVIEW,
    name,
    message,
    shelfName
});

export const selectShelf = (shelf: Shelf): Action => ({
    type: SELECT_SHELF,
    shelf
});

export const toggleBookToShelf = (bookID: number, shelfName, toggle): Action => ({
    type: TOGGLE_BOOK_TO_SHELF,
    bookID,
    shelfName,
    toggle
});