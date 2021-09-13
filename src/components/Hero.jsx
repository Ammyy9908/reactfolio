import React from 'react'
import "./Hero.css"
import image from "../avatar.jpeg"
function Hero() {
const [scroll,setScroll] = React.useState(0);

    

    React.useEffect(()=>{
        window.onscroll = () => {
          console.log(window.pageYOffset)
          setScroll(window.pageYOffset/3)
        }
       },[])


    return (
        <section className="hero">
            <div className="section__wrapper">
                <div className="portfolio__avatar">
                    <div className="portfolio__avatar__background" style={{top:`-${scroll}px`,left:`-${scroll}`}}></div>
                    <img src={image} alt="portfolio__avatar" />
                </div>
                <div className="portfolio__meta">
                    <h1 className="heading">Hi, I'm Sumit I am a </h1> <span className="role">ReactJS Developer</span>
                    <div className="portfolio__subheading">
                        <p>I’m Full Stack Web Developer in Mern Stack Love to Develope MERN Satck Web Applications.</p>
                    </div>
                    <div className="portfolio__hero__actions">
                        <button>Contact me</button>
                        <button>Check my work</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
