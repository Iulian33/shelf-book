// @flow
const CHANGE_THEME = "CHANGE_THEME";

export type Action = { type: typeof CHANGE_THEME, theme: string };

export type State = {
  theme: string
};

const initialState: State = {
  theme: "light"
};

export default function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case CHANGE_THEME: {
      return {
        ...state,
        theme: action.theme
      };
    }

    default: {
      return state;
    }
  }
}

export const changeThemeAction = (theme: string): Action => ({
  type: CHANGE_THEME,
  theme
});
