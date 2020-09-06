import {MenuActionTypes, TOGGLE_MENU} from "./Types";

export function toggleMenu(): MenuActionTypes {
    console.log('ssss')
    return {
        type: TOGGLE_MENU,
    }
}
