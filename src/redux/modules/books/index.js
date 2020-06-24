// @flow
const GET_BOOKS = "GET_BOOKS";
const SET_SELECTED_BOOK = "SET_SELECTED_BOOK";
const ADD_BOOK_REVIEW = "ADD_BOOK_REVIEW";

export interface Review {
    name: string,
    message: string
}

export interface Book {
    id: number,
    title: string,
    isbn: string,
    pageCount: number,
    publishedDate: Object,
    thumbnailUrl: string,
    shortDescription: string,
    longDescription: string,
    status: string,
    authors: string[],
    categories: string[],
    reviews: Review[]
}

export type Action =
    { type: typeof GET_BOOKS, allBooks: Book[] }
    | { type: typeof SET_SELECTED_BOOK, selectedBook: Book }
    | { type: typeof ADD_BOOK_REVIEW, name: string, message: string, bookId: number };

export type State = {
    allBooks: Book[],
    selectedBook: Book
};

const initialState: State = {
    allBooks: [],
    selectedBook: {}
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

        case ADD_BOOK_REVIEW: {
            const newBooks = state.allBooks.map((book) => {
                if (action.bookId === book.id) {
                    return {
                        ...book,
                        reviews: [
                            ...book.reviews, {
                                name: action.name,
                                message: action.message
                            }
                        ]
                    }
                }
                return book;
            });
            return {
                ...state,
                allBooks: newBooks
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

export const addBookReview = (name: string, message: string, bookId:number): Action => ({
    type: ADD_BOOK_REVIEW,
    name,
    message,
    bookId
});