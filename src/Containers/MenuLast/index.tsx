import React, {ReactNode} from "react";
import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import {Button} from '@material-ui/core'
import {getMenuState} from "../../Stores/Menu/Selectors";
import {toggleMenu} from "../../Stores/Menu/Actions";
import Menu from "@Components/Menu";
import {Navbar} from "../index";

interface MenuLastProps {

}

const MenuLast: React.FunctionComponent<MenuLastProps> = (): JSX.Element => {
    const menuVisible = useSelector(getMenuState);
    const dispatch = useDispatch();
    console.log(menuVisible)
    return(
            <div className='menu-container' style={{opacity: menuVisible ? 1 :0, zIndex: menuVisible? 999: 0}}>
                <Navbar/>
            </div>
    )
}

export default MenuLast
