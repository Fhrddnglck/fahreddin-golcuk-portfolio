import React from "react";
import './style.css'
import { Android } from '@material-ui/icons'
const Projects = () =>{
    return(
        <section className='projects-container'>
            <div className='projects-rows'>
                <div className='projects-rows-front'><img src={require('../../Assets/Common/noomitpad.png')} style={{width:'90%',height:'90%',padding:16}}/></div>
                <div className='projects-rows-back' style={{backgroundImage: `url(require("../../Assets/Common/noomitpad.png"))`}}>
                    <p className='projects-text-header'>NOOMITPAD</p>
                    <p className='projects-text-title'>BOOK RECORDER</p>
                    <Android onClick={()=> window.open('https://play.google.com/store/apps/details?id=com.poolapp.noomitpad&hl=en_US','_blank')} color="primary"/>
                </div>
            </div>
            <div className='projects-rows'>
                <div className='projects-rows-front'><img src={require('../../Assets/Common/varco-logo.png')} style={{width:'100%',height:'100%'}}/></div>
                <div className='projects-rows-back'>
                    <p className='projects-text-header'>VARCO</p>
                    <p className='projects-text-title'>FINANCIAL</p>
                    <Android onClick={()=> window.open('https://play.google.com/store/apps/details?id=com.poolapp.noomitpad&hl=en_US','_blank')} color="primary"/>
                </div>
            </div>
            <div className='projects-rows'>
                <div className='projects-rows-front'><img src={require('../../Assets/Common/beulogo-kucuk.png')} style={{width:'100%',height:'100%'}}/></div>
                <div className='projects-rows-back'>
                    <p className='projects-text-header'>ZBEU MOBIL</p>
                    <p className='projects-text-title'>EDUCATION</p>
                    <Android onClick={()=> window.open('https://play.google.com/store/apps/details?id=com.poolapp.noomitpad&hl=en_US','_blank')} color="primary"/>
                </div>
            </div>
        </section>
    )
}

export default Projects
