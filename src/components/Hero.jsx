import React from 'react'
import "./Hero.css"
import { connect } from 'react-redux';
function Hero(props) {
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
                    {props.data  ? <><div className="portfolio__avatar__background" style={{top:`-${scroll}px`,left:`-${scroll}`,backgroundColor:`${props.data && props.data.color}`}}></div>
                     <img src={props.data.image} alt="portfolio__avatar"/></>:<div className="box"></div>}
                </div>
                <div className="portfolio__meta">
                    {props.data ? <h1 className="heading">Hi, I'm {props.data.name} I am a </h1>:<div className="blank_heading"></div> }
                    {props.data ? <span className="role" style={{color:props.data && props.data.color}}>ReactJS Developer</span>:<div className="blank__role"></div>}
                    {props.data ?<div className="portfolio__subheading">
                      <p>I’m Full Stack Web Developer in Mern Stack Love to Develope MERN Satck Web Applications.</p>
                    </div>:<div className="blank_subheading"></div>}
                    {props.data ?<div className="portfolio__hero__actions">
                        <button>Contact me</button>
                        <button>Check my work</button>
                    </div>:<div className="blank_controls">
                        <div></div>
                        <div></div>
                    </div>}
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state)=>({
    data:state.appReducer.data
})

export default connect(mapStateToProps,null)(Hero)
