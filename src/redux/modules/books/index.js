// @flow
const GET_BOOKS = "GET_BOOKS";

export type Action = { type: typeof GET_BOOKS, allBooks: Object[] };
export type State = {
    allBooks: Object[]
};

const initialState: State = {
    allBooks: []
};

export default function reducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case "GET_BOOKS": {
            return {
                ...state,
                allBooks: action.allBooks
            };
        }

        default: {
            return state;
        }
    }
}

export const setBooks = (allBooks: Object[]): Action => ({
    type: GET_BOOKS,
    allBooks: allBooks
});