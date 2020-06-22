// @flow
import type { Book } from "redux/modules/books";
import { setSelectedBook } from "redux/modules/books";

const ADD_SHELF = "ADD_SHELF";
const ADD_BOOK_TO_SHELF = "ADD_BOOK_TO_SHELF";

export type Action =
    { type: typeof ADD_SHELF, shelf: string[] }
    | { type: typeof ADD_BOOK_TO_SHELF, book: Book, shelf: string, toggle: boolean }

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

        case ADD_BOOK_TO_SHELF: {

            const newShelves = state.allShelves.map((shelf) => {
                if (action.shelf === shelf.name) {
                    let books = [
                        ...shelf.books,
                        action.book
                    ];

                    if (!action.toggle) {
                        books = shelf.books.filter((book) => book.id !== action.book.id);
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

        default: {
            return state;
        }
    }
}

export const addShelf = (shelf: Shelf): Action => ({
    type: ADD_SHELF,
    shelf
});

export const addBookToShelf = (book: Book, shelf, toggle): Action => ({
    type: ADD_BOOK_TO_SHELF,
    shelf,
    book,
    toggle
});
