import React, {ReactNode} from "react";
import logo from '@Assets/Common/logo-faho.png'
import './style.scss'
import { ChevronRight, Twitter, LinkedIn, Instagram } from '@material-ui/icons'
import {Logo} from "@Components/index";
import {Button} from "@material-ui/core";
import {toggleMenu} from "../../Stores/Menu/Actions";
import {useDispatch} from "react-redux";

interface MenuProps {
    children: React.FunctionComponent | ReactNode
}

const Menu: React.FunctionComponent<MenuProps> = ({children}): JSX.Element => {
    const dispatch = useDispatch();
    return(
        <nav>
            <div className='nav-container'>
                <Button onClick={ () => dispatch(toggleMenu())} style={{ alignSelf:'flex-end', marginTop: 25, right:8 }}>
                    X
                </Button>
                    <Logo/>
                <ul className='nav-ul'>
                    { children }
                </ul>
                <div>
                    <Button onClick={ () => window.open('http://google.com',"_blank")   }>
                        <Twitter />
                    </Button>
                    <Button>
                        <LinkedIn />
                    </Button>
                    <Button>
                        <Instagram />
                    </Button>
                </div>
                <p style={{fontWeight:'lighter'}}>Designed by Fahreddin Gölcük</p>
                <p style={{fontWeight:'lighter',fontSize:8}}>2020</p>
            </div>
        </nav>
    )
}

export default Menu
