// @flow
import type { Book } from "components/Main/Books";

const GET_BOOKS = "GET_BOOKS";
const SET_SELECTED_BOOK = "SET_SELECTED_BOOK";

export type Action = { type: typeof GET_BOOKS, allBooks: Book[] } | { type: typeof SET_SELECTED_BOOK, selectedBook: Book };

export type State = {
    allBooks: Book[],
    selectedBook: Book
};

const initialState: State = {
    allBooks: [],
    selectedBook:  {}
};

export default function reducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case GET_BOOKS: {
            return {
                ...state,
                allBooks: action.allBooks
            };
        }

        case SET_SELECTED_BOOK: {
            return {
                ...state,
                selectedBook: action.selectedBook
            };
        }

        default: {
            return state;
        }
    }
}

export const getBooks = (allBooks: Book[]): Action => ({
    type: GET_BOOKS,
    allBooks: allBooks
});

export const setSelectedBook = (selectedBook: Book): Action => ({
    type: SET_SELECTED_BOOK,
    selectedBook
});