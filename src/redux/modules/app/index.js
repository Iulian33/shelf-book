// @flow
const CHANGE_THEME = "CHANGE_THEME";

export type Action = { type: typeof CHANGE_THEME, mode: boolean };

export type State = {
  darkMode: boolean
};

const initialState: State = {
  darkMode: false
};

export default function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case CHANGE_THEME: {
      return {
        ...state,
        darkMode: action.mode
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
