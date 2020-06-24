// @flow

const TOGGLE_MODAL = "TOGGLE_MODAL";

export type Action =
    | {
    type: typeof TOGGLE_MODAL,
    name: string,
    toggle: boolean
}

export type State = {
    newShelve: boolean,
    bookDetails: boolean,
    review: boolean
};

const initialState: State = {
    newShelve: false,
    bookDetails: false,
    review: false
};

export default function reducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case TOGGLE_MODAL: {
            return {
                ...state,
                [action.name]: action.toggle
            };
        }
        default: {
            return state;
        }
    }
}

export const toggleModal = (name: string, toggle: boolean): Action => ({
    type: TOGGLE_MODAL,
    name,
    toggle
});
