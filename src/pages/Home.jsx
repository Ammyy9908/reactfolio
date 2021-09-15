import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Work from '../components/Work'
import "./Home.css"
import Contact from '../components/Contact'
import Resume from '../components/Resume'
import Modal from '../components/Modal'
import {MdExpandLess} from "react-icons/md"
import { connect } from 'react-redux'
import { setNav } from '../redux/actions/_appActions'

function Home(props) {
    const [scroll,setScroll] = React.useState(0);


    const handleNav = (e)=>{
        console.log(e.target);
        if(!e.target.classList.contains("mobile__nav") && !e.target.classList.contains("mobile_nav_menu")){
            props.setNav(false)
        }
    }

    

   



    
    return (
        <div className="home" onClick={handleNav}>
            <Modal/>
            <div className="container">
            <Navbar/>
            {props.nav && <div className="mobile__nav">
                <div className="nav__links">
                <a href="#work">WORK</a>
                <a href="#resume">RESUME</a>
                <a href="#contact">CONTACT</a>
                </div>
                
            </div>}

            
            <Hero scroll={scroll} setScroll={setScroll}/>
            <Work/>
            <Contact/>
            <Resume/>

            <a href="#top" className={`goto_btn ${scroll>240 && "fab__enable"}`} style={{backgroundColor:props.data && props.data.color}}><MdExpandLess/></a>
            </div>
        </div>
    )
}


const mapStateToProps = (state)=>({
    data:state.appReducer.data,
    nav:state.appReducer.nav
})

const mapDispatchToProps = (dispatch)=>({
    setNav:(nav)=>dispatch(setNav(nav))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
