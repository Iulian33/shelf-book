// @flow
const SET_CATEGORIES = "SET_CATEGORIES";

export type Action = {
    type: typeof SET_CATEGORIES,
    categories: string[]
}

export type State = {
    allCategories: string[],
};

const initialState: State = {
    allCategories: []
};

export default function reducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case SET_CATEGORIES: {
            return {
                ...state,
                allCategories: action.categories
            };
        }

        default: {
            return state;
        }
    }
}

export const setCategories = (categories: string[]): Action => ({
    type: SET_CATEGORIES,
    categories
});
