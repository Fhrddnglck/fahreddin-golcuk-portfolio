import React from "react";
import { MenuItem, Menu } from '@Components/index'
import './style.scss'

const Navbar = () =>{

    return(
        <Menu>
            <MenuItem title='Home'/>
            <MenuItem title='Resume'/>
            <MenuItem title='Projects'/>
            <MenuItem title='Experiences'/>
        </Menu>
    )
}

export default Navbar
