// @flow
const CHANGE_THEME = "CHANGE_THEME";
const CHANGE_MAIN_LOAD = "CHANGE_MAIN_LOAD";

export type Action =
    { type: typeof CHANGE_THEME, mode: boolean }
    | { type: typeof CHANGE_MAIN_LOAD, mainLoad: string };

export type State = {
    darkMode: boolean,
    mainLoad: string
};

const initialState: State = {
    darkMode: false,
    mainLoad: 'allBooks'
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
