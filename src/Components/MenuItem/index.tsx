import * as React from "react";
import './style.scss'

interface MenuItemProps {
    title: string;
}

const MenuItem: React.FunctionComponent<MenuItemProps> = ({title}): JSX.Element =>{

    return(
        <li><a className='item-title' href='#'>{title}</a></li>
    )
}

export default MenuItem
