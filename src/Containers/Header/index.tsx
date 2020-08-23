import React from 'react';
import './style.scss';
import MyPhoto from '../../Assets/Common/my-photo.jpeg'

const Header = () => {

    return(
        <header className="header-container">
            <p className="header-text">Hello, I'm <strong>Fahreddin Gölcük.</strong>
                <br/>
                I'm Mobile Application Developer.
            </p>
            <img src={MyPhoto} alt='myPhoto' className='header-photo'/>
        </header>
    )
}

export default Header
