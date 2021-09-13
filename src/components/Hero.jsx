import React from 'react'
import "./Hero.css"
function Hero() {
const [scroll,setScroll] = React.useState(0);

    

    React.useEffect(()=>{
        window.onscroll = () => {
          console.log(window.pageYOffset)
          setScroll(window.pageYOffset/3)
        }
       },[])

    const image = "https://lh3.googleusercontent.com/vtsraeE89i8B0sDnOfoRGf5Sd0z-XB1qpxCsJLQPYKNZxY5BZrrB8yiGAcAjnvwcGxsQfaaqOmRtkI0JIDzbqP4CiGVEU6oFf821OP5g4IlxJsGYAKLaW4eGGS0G-TU46Fhg866lnnmN1Bci8bLoUO9muCJ4OjhthC7iGaATYjZVYIsfa3Y3PtwyGqCvA7MrKGR2CJc300cDiCrkFmosETwmBYclG4sDMqMZTBMrAKCz80uRa-d6Z_j7H2ikaDNXrGbmvRSUeDfQp2r08sQFAFGETMEnS183jPRa2UljYD-r-IS4Hpw-0gHEZqpka8sSWIxBzWLL1D691IlETcZdFgEWpnjYkz3-RbKv0lIjFDwk3BrCsYR6PhwREDPletP61pcPEWveM6xrQV2KDheuGpV1b0qKnZd086dEdRP5iCTo_d5TSrrtYeFcDjDKI17PvuJ7UPSWcTEb8qndYrSNYu9ui0fftAEsatNrk-Ong6ykyNNxBdUcsdivQxo2960fMcUqKz_V_HEz7KCRXGlEosoutmHwu39JVevK0tKEXkZPeq83WYHemHPDuS4ytSi2ITvnvsZI0QO-APIRNmK1XP_kDZXSnrGfGGXYHvFSf6Jjx5GYmqEw5PglriBbAJsojpkZjHKvZHPiXA_l9xkinaI8SmiI1Y5mU3mHNk4k4e9BQJAaPfOciq9PAJVSqVscrLNvVklqOELw1WOaCoi2EHhp=w614-h820-no?authuser=2";
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
