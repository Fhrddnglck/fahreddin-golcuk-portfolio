import React from "react";
import './style.scss'
import { Button,TextField } from '@material-ui/core';

const Experiences = () =>{

    return(
        <section className='experiences-container'>
            <div className='experiences-container-main'>
                <p className='experiences-container-main-header'>CONTACT ME</p>
                <TextField variant='outlined' placeholder='Your Name'/>
                <TextField style={{marginTop:16}} variant='outlined' placeholder='Your Message'/>
                <Button style={{margin:36}} variant='contained' color='primary' size='large'>
                    <p>SUBMIT</p>
                </Button>
                <p style={{fontWeight:'lighter',fontSize:8,marginTop:'auto'}}>2020 | Created by Fahreddin GÖLCÜK</p>
            </div>
        </section>
    )
}

export default Experiences;
