import * as React from "react";
import './style.scss'
import { toggleMenu } from "../../Stores/Menu/Actions";
import { useDispatch } from "react-redux";

const scrollToElement = (value: number) => {
    setTimeout(function () {
        window.scrollTo(0, value);
    },2);
}

interface MenuItemProps {
    title: string;
    scrollValue?: number;
}

const MenuItem: React.FunctionComponent<MenuItemProps> = ({title,scrollValue= 0}): JSX.Element =>{
    const dispatch = useDispatch()
    return(
        <li onClick={()=> {
            scrollToElement(scrollValue)
            dispatch(toggleMenu())
        }}><a className='item-title' href='#'>{title}</a></li>
    )
}

export default MenuItem
