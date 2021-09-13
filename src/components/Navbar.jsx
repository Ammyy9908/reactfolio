import React from 'react'
import "./Navbar.css"
import {FaGithub,FaLinkedin,} from "react-icons/fa"
import {FiMenu} from "react-icons/fi"
function Navbar() {
 
    return (
        <header>
            <span className="brand-logo">SK</span>
            <nav>
                <ul>
                    <li><a href="/">Work</a></li>
                    <li><a href="/">Resume</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
            <div className="social__profiles">
                <button><FaGithub/></button>
                <button><FaLinkedin/></button>
            </div>
            <button className="mobile_nav_menu">
                <FiMenu/>
            </button>
        </header>
    )
}

export default Navbar
