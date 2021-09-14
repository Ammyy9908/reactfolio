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

function Home(props) {
    const [scroll,setScroll] = React.useState(0);

    

   



    
    return (
        <div className="home">
            <Modal/>
            <div className="container">
            <Navbar/>
            {/* <div className="mobile__nav">
                <div className="nav__links">
                <a href="#">WORK</a>
                <a href="#">RESUME</a>
                <a href="#">CONTACT</a>
                </div>
                
            </div> */}

            
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
    data:state.appReducer.data
})
export default connect(mapStateToProps,null)(Home)
