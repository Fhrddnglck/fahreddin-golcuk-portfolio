import * as React from "react";
import './style.scss'
import {Android} from "@material-ui/icons";
import {ReactNode} from "react";

interface ProjectProps {
    image: string;
    linkUrl?: string;
    header: string;
    children: React.FunctionComponent | ReactNode;
}

const Project: React.FunctionComponent<ProjectProps> = ({image,linkUrl,children,header}): JSX.Element =>{

    return(
        <div className='projects-rows'>
            <div className='projects-rows-front'><img src={image} style={{width:'90%',height:'90%',padding:16}}/></div>
            <div className='projects-rows-back'>
                <p className='projects-text-header'>{header}</p>
                {children}
                <div style={{width:64,height:64,backgroundColor:'white',borderRadius:360,display:'flex',justifyContent:'center',alignItems:'center',margin:16}}>
                    <Android onClick={()=> window.open(linkUrl,'_blank')} color="action"/>
                </div>
            </div>
        </div>
    )
}

export default Project
