export interface MenuState {
    menuVisible: boolean;
}

export const TOGGLE_MENU = 'TOGGLE_MENU'

interface ToggleMenuAction {
    type: typeof TOGGLE_MENU;
}


export type MenuActionTypes = ToggleMenuAction;
