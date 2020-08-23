import React, {ReactNode} from "react";
import logo from '@Assets/Common/logo-faho.png'
import './style.scss'

interface MenuProps {
    children: React.FunctionComponent | ReactNode
}

const Menu: React.FunctionComponent<MenuProps> = ({children}): JSX.Element => {

    return(
        <nav className='nav-container'>
            <img className='nav-logo' src={logo} alt='Logo'/>
            <ul className='nav-ul'>
            { children }
            </ul>
        </nav>
    )
}

export default Menu
