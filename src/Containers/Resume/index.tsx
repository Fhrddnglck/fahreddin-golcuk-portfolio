import React, {useState} from 'react';
import  './style.css';
import { LinearProgress } from '@material-ui/core';
import {SkillProgress} from "@Components/index";
const Resume = () => {
    const normalise = (value: number) => (value - 100) * 100 / (100 - 0);
    return(
        <section className="section-header">
            <div className='resume-container'>
                <h1 className='resume-text-header'>
                   ABOUT
                </h1>
                <p className='resume-text'>
                    Who am I?
                    Following current technologies,
                    open to innovations, high energy,
                    loves developing new products and teamwork
                    I am always a positive engineer candidate. To push my limits, to question and
                    in harmony with the place where I work I like to create new added values.
                    Is dynamic in what I do,
                    I focus on my work and give importance to details
                </p>
                <div style={{display:'flex',width:'100%',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
                    <SkillProgress title='React Native' rate={95}/>
                    <SkillProgress title='Typescript' rate={88}/>
                    <SkillProgress title='Redux' rate={80}/>
                    <SkillProgress title='Unity3D' rate={83}/>
                    <SkillProgress title='Firebase' rate={86}/>
                    <SkillProgress title='Typescript' rate={91}/>
                    <SkillProgress title='Android' rate={95}/>
                </div>
            </div>
        </section>
    )
}

export default Resume
