import React from "react";
import { MenuItem, Menu } from '@Components/index'
import './style.scss'

const Navbar = () =>{

    return(
        <Menu>
            <MenuItem scrollValue={0}    title='Home'/>
            <MenuItem scrollValue={800}  title='Resume'/>
            <MenuItem scrollValue={1400} title='Projects'/>
            <MenuItem scrollValue={2000} title='Experiences'/>
        </Menu>
    )
}

export default Navbar
