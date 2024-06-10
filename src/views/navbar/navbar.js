import React, { useState,useEffect } from 'react';
import './navbar.css';

const NavBar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);


    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 25 ? setSticky(true) : setSticky(false);
        })
    }, [])

    return (
        <div className='containerblock'>
            <nav class='navbar fixed-top' id={`${sticky ? "dark-nav" : ""}`}>
                <div className='container'>
                    <div className='logo_section'>
                        <a href='/'><img src="/images/logo1.png" alt="" /></a>
                    </div>
                    <div className='links'>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/aboutus">About Us</a>
                            </li>
                            <li className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Projects
                                </a>
                                <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/project1">Ongoing Projects</a></li>
                                    <li><a className="dropdown-item" href="/project2">Completed Projects</a></li>
                                    <li><a className="dropdown-item" href="/project3">Upcoming Projects</a></li>
                                </ul>
                            </li>
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