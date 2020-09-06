import * as React from "react";
import './style.scss'
import logo from "@Assets/Common/logo-faho.png";

interface LogoProps {

}

const Logo: React.FunctionComponent<LogoProps> = (): JSX.Element =>{

    return(
            <img className='logo' src={logo} alt='Logo'/>
    )
}

export default Logo
