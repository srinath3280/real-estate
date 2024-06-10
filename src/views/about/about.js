import React from 'react';
import './about.css';
import { useLocation } from 'react-router-dom';

const AboutUs = () => {
    const location = useLocation();
    console.log(window.location);
    return (
        <div>
            <div className='aboutpage'>
                <div className='aboutpagecontent'>
                    <h1>ABOUT VDHATRI HOMES</h1>
                    <p>Creating Synergy Between Lifestyle And Aesthetics</p>
                    <p className='path'>HOME &nbsp;&nbsp;<span style={{ color: "red" }}>{location.pathname}</span></p>
                </div>
            </div>
            <section className='aboutpagecontainer'>
                <h3>About</h3>
                <hr></hr>
            </section>
            <section>
                
            </section>
        </div>
    )
}

export default AboutUs
