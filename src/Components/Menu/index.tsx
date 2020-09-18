import React, { ReactNode } from "react";
import './style.scss'
import { Twitter, LinkedIn, Instagram,GitHub, Close } from '@material-ui/icons'
import { Logo } from "@Components/index";
import { Button } from "@material-ui/core";
import { toggleMenu } from "../../Stores/Menu/Actions";
import { useDispatch } from "react-redux";

interface MenuProps {
    children: React.FunctionComponent | ReactNode
}

const Menu: React.FunctionComponent<MenuProps> = ({children}): JSX.Element => {
    const dispatch = useDispatch();
    return(
        <nav>
            <div className='nav-container'>
                <Button onClick={ () => dispatch(toggleMenu())} style={{ alignSelf:'flex-end', marginTop: 16, right: 4 }}>
                    <Close fontSize={"large"}/>
                </Button>
                    <Logo/>
                <ul className='nav-ul'>
                    { children }
                </ul>
                <div>
                    <Button onClick={ () => window.open('https://twitter.com/fhrddnglck',"_blank")   }>
                        <Twitter />
                    </Button>
                    <Button onClick={()=> window.open('https://www.linkedin.com/in/fahreddin-gölcük-990196137/',"_blank") }>
                        <LinkedIn />
                    </Button>
                    <Button onClick={()=> window.open('https://github.com/Fhrddnglck','_blank')}>
                        <GitHub />
                    </Button>
                    <Button onClick={()=> window.open('http://instagram.com/fahreddingolcuk','_blank')}>
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
