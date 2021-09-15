import React from 'react'
import "./Navbar.css"
import {FaGithub,FaLinkedin,} from "react-icons/fa"
import {FiMenu} from "react-icons/fi"
import { connect } from 'react-redux'
import { setNav } from '../redux/actions/_appActions'
function Navbar(props) {


 
    return (
        <header id="top">
            <span className="brand-logo">{props.data ? props.data.name.charAt(0)+props.data.name.charAt(1):<div className="blank_logo"></div>}</span>
            <nav>
                <ul>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="social__profiles">
                <button><FaGithub/></button>
                <button><FaLinkedin/></button>
            </div>
            <button className="mobile_nav_menu" onClick={()=>props.setNav(!props.nav)}>
                <FiMenu/>
            </button>
        </header>
    )
}
const mapStateToProps = (state)=>({
    data:state.appReducer.data,
    nav:state.appReducer.nav
})

const mapDispatchToProps = (dispatch)=>({
    setNav:(nav)=>dispatch(setNav(nav))
})

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)
