import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Work from '../components/Work'
import "./Home.css"
import Contact from '../components/Contact'
import Resume from '../components/Resume'

function Home() {
    

    

   



    
    return (
        <div className="home">
            <div className="container">
            <Navbar/>
            {/* <div className="mobile__nav">
                <div className="nav__links">
                <a href="#">WORK</a>
                <a href="#">RESUME</a>
                <a href="#">CONTACT</a>
                </div>
                
            </div> */}
            <Hero/>
            <Work/>
            <Contact/>
            <Resume/>
            </div>
        </div>
    )
}

export default Home
