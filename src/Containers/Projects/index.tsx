import React from "react";
import './style.css'

const Projects = () =>{

    return(
        <section className='projects-container'>
            <div className='projects-columns'>
                <p>PROJECTS</p>
                <p>Here it's my projects </p>
            </div>
            <div className='projects-columns'>
                <div className='projects-rows'>
                    PROJECT1
                </div>
                <div className='projects-rows'>
                    PROJECT2
                </div>
                <div className='projects-rows'>
                    PROJECT2
                </div>
            </div>
            <div className='projects-columns'>
                <div className='projects-rows'>
                    PROJECT3
                </div>
                <div className='projects-rows'>
                    PROJECT4
                </div>
                <div className='projects-rows'>
                    PROJECT2
                </div>
            </div>
            <div className='projects-columns'>
                <div className='projects-rows'>
                    PROJECT5
                </div>
                <div className='projects-rows'>
                    PROJECT6
                </div>
                <div className='projects-rows'>
                    PROJECT2
                </div>
            </div>
        </section>
    )
}

export default Projects
