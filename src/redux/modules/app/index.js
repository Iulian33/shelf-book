// @flow
import type { Shelf } from "redux/modules/shelves";
import type { Book } from "redux/modules/books";

const CHANGE_THEME = "CHANGE_THEME";
const CHANGE_MAIN_LOAD = "CHANGE_MAIN_LOAD";
const SET_ON_REVIEW = "SET_ON_REVIEW";

export type Action =
      { type: typeof CHANGE_THEME, mode: boolean }
    | { type: typeof CHANGE_MAIN_LOAD, mainLoad: string }
    | { type: typeof SET_ON_REVIEW, onReview: Shelf | Book };

export type State = {
    darkMode: boolean,
    mainLoad: string,
    onReview: Shelf | Book
};

const initialState: State = {
    darkMode: false,
    mainLoad: 'allBooks',
    onReview: {}
};

export default function reducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case CHANGE_THEME: {
            return {
                ...state,
                darkMode: action.mode
            };
        }
        case CHANGE_MAIN_LOAD: {
            return {
                ...state,
                mainLoad: action.mainLoad
            };
        }
        case SET_ON_REVIEW: {
            return {
                ...state,
                onReview: action.onReview
            };
        }
        default: {
            return state;
        }
    }
}

export const changeThemeAction = (mode: string): Action => ({
    type: CHANGE_THEME,
    mode
});

export const changeMainLoadAction = (mainLoad: string): Action => ({
    type: CHANGE_MAIN_LOAD,
    mainLoad
});

export const setOnReview = (onReview: Shelf | Book): Action => ({
    type: SET_ON_REVIEW,
    onReview
});
