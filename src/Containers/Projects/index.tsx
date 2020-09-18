import React from "react";
import './style.css'
import { Project } from "@Components/index";

const ProjectText = (text: string) => {
    return (
        <div style={{display:'flex',backgroundColor:'white',width:75,height:30,borderRadius:8,alignItems:'center',justifyContent:'center'}}>
            <p style={{fontWeight:'lighter'}}>{text}</p>
        </div>
    )
}

const Projects = () =>{
    return(
        <section className='projects-container'>
            <Project
                image={require('../../Assets/Common/noomitpad.png')}
                header='NOOMITPAD'
                linkUrl='https://play.google.com/store/apps/details?id=com.poolapp.noomitpad&hl=en_US'>
                <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignItems:'stretch',width:'100%',height:'100%'}}>
                    { ProjectText('React Native') }
                    { ProjectText('Redux') }
                    { ProjectText('Javascript') }
                    { ProjectText('Adobe XD') }
                    { ProjectText('Git') }
                    { ProjectText('Hooks') }
                    { ProjectText('Firebase') }
                </div>
            </Project>
            <Project
                image={require('../../Assets/Common/varco-logo.png')}
                header='VARCO'
                linkUrl='https://play.google.com/store/apps/details?id=com.poolapp.noomitpad&hl=en_US'>
                <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignItems:'stretch',width:'100%',height:'100%'}}>
                    { ProjectText('React Native') }
                    { ProjectText('Redux') }
                    { ProjectText('Javascript') }
                    { ProjectText('Adobe XD') }
                    { ProjectText('Git') }
                    { ProjectText('Amazon AWS') }
                    { ProjectText('TypeORM') }
                    { ProjectText('Node.js') }
                    { ProjectText('Docker') }
                    { ProjectText('Typescript') }
                </div>
            </Project>
            <Project
                image={require('../../Assets/Common/beulogo-kucuk.png')}
                header='ZBEU MOBIL'
                linkUrl='https://play.google.com/store/apps/details?id=com.poolapp.noomitpad&hl=en_US'>
                <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignItems:'stretch',width:'100%',height:'100%'}}>
                    { ProjectText('React Native') }
                    { ProjectText('Redux') }
                    { ProjectText('Javascript') }
                    { ProjectText('Adobe XD') }
                    { ProjectText('Git') }
                    { ProjectText('Hooks') }
                    { ProjectText('Firebase') }
                </div>
            </Project>
            <Project
                image={require('../../Assets/Common/youthmeet.png')}
                header='YOUTH MEET'
                linkUrl='https://play.google.com/store/apps/details?id=com.poolapp.noomitpad&hl=en_US'>
                <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignItems:'stretch',width:'100%',height:'100%'}}>
                    { ProjectText('React Native') }
                    { ProjectText('Redux') }
                    { ProjectText('Javascript') }
                    { ProjectText('Adobe XD') }
                    { ProjectText('Git') }
                    { ProjectText('Hooks') }
                    { ProjectText('Firebase') }
                </div>
            </Project>
            <Project
                image={require('../../Assets/Common/koysat.png')}
                header='KOYSAT'
                linkUrl='https://play.google.com/store/apps/details?id=com.poolapp.noomitpad&hl=en_US'>
                <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignItems:'stretch',width:'100%',height:'100%'}}>
                    { ProjectText('React Native') }
                    { ProjectText('Redux') }
                    { ProjectText('Javascript') }
                    { ProjectText('Adobe XD') }
                    { ProjectText('Git') }
                    { ProjectText('Hooks') }
                    { ProjectText('Firebase') }
                </div>
            </Project>
        </section>
    )
}

export default Projects
