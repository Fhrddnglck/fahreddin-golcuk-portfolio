import {MenuActionTypes, TOGGLE_MENU} from "./Types";

export function toggleMenu(): MenuActionTypes {
    return {
        type: TOGGLE_MENU,
    }
}
