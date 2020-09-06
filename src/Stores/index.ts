import {combineReducers, createStore,compose,applyMiddleware} from 'redux'
import menuReducer from './Menu/Reducers'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    menu: menuReducer,
})

export const store = createStore(rootReducer,compose(applyMiddleware(thunk)));

export type MenuState = ReturnType<typeof rootReducer>
