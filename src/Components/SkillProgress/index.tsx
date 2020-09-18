import * as React from "react";
import './style.scss'
import {LinearProgress} from "@material-ui/core";

interface SkillProgressProps {
    title: string;
    rate: number;
}

const SkillProgress: React.FunctionComponent<SkillProgressProps> = ({title,rate=30}): JSX.Element =>{

    return(
    <div style={{width:'35%',margin:16}}>
        <p style={{color:'white',fontWeight:'lighter'}}>{title}</p>
        <LinearProgress style={{backgroundColor:'white',borderRadius:25,boxShadow: '3px 3px 15px #d51d4f',width:'100%',height:8,overflow:'hidden'}} color="secondary" variant='determinate' value={rate}/>
    </div>
    )
}

export default SkillProgress
