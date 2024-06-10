import React from 'react';
import './navbar.css';

const NavBar = () => {

    return (
        <div className='containerblock'>
            <nav class='navbar fixed-top'>
                <div className='container'>
                    <div className='logo_section'>
                        <img src="/images/logo.jpeg" alt="" />
                    </div>
                    <div className='links'>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/aboutus">About Us</a>
                            </li>
                            <li className='dropdown'>
                                <a href="/">Projects</a>
                                <div className='dropdown-content'>
                                    <a href="/project1">Project 1</a>
                                    <a href="/project2">Project 2</a>
                                    <a href="/project3">Project 3</a>
                                </div>
                            </li>
                            {/* <li>
                                <a href="/">Projects</a>
                            </li> */}
                            <li>
                                <a href="/contactus">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar