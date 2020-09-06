import * as React from "react";
import './style.scss'
import { Menu } from '@material-ui/icons'
import {Button} from '@material-ui/core'
import { Logo } from "@Components/index";
import {toggleMenu} from "../../Stores/Menu/Actions";
import {useDispatch, useSelector} from "react-redux";
import {getMenuState} from "../../Stores/Menu/Selectors";

interface TopNavProps {

}

const TopNav: React.FunctionComponent<TopNavProps> =
    (): JSX.Element =>{
    const dispatch = useDispatch();
        const menuVisible = useSelector(getMenuState);
    return(
        <div className='top-nav-container'>
            <Logo/>
            <Button className='top-nav-menu' onClick={ () => dispatch(toggleMenu()) }>
                    <Menu style={{fontSize:'3em'}} className='top-nav-menu-icon'/>
            </Button>
        </div>
    )
}

export default TopNav
