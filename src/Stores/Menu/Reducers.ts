import {
    MenuActionTypes,
    MenuState,
    TOGGLE_MENU
} from "./Types";

import {INITIAL_STATE} from "./InitialState";

const initialState: MenuState = INITIAL_STATE

export default function menuReducer(
    state = initialState,
    action: MenuActionTypes
): MenuState {
    switch (action.type) {
        case TOGGLE_MENU:
            return {
                ...state,
                menuVisible: !state.menuVisible
            }
        default:
            return state;
    }
}
