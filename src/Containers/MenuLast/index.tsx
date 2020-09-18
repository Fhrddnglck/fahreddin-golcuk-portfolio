import React from "react";
import './style.scss'
import { useSelector } from "react-redux";
import { getMenuState } from "../../Stores/Menu/Selectors";
import { Navbar } from "../index";

interface MenuLastProps {

}

const MenuLast: React.FunctionComponent<MenuLastProps> = (): JSX.Element => {
    const menuVisible = useSelector(getMenuState);
    return(
            <div
                className='menu-container'
                style={{ opacity: menuVisible ? 1 : 0, zIndex: menuVisible ? 999 : 0, pointerEvents: menuVisible ? 'inherit' : 'none' }}>
                <Navbar/>
            </div>
    )
}

export default MenuLast
