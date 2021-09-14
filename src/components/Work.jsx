import React from 'react'
import "./Work.css"
import {FiEye} from "react-icons/fi"
import {FaGithub} from "react-icons/fa"
import Header from './Header'
function WorkCard(){
   
    return <div className="work_card">
        <div className="card__thumb"></div>
        <span className="work__title">Project Name</span>
        <div className="work_tags">
            <span>HTML</span>
            <span>CSS</span>
        </div>
        <p className="work_desc">This is the description of the Project</p>
        <div className="work__controls">
            <button className="btn preview_btn">
                <FiEye/> Preview
            </button>
            <button className="btn repo_btn">
                <FaGithub/>
                Github Repo
            </button>
        </div>
    </div>
}
function Work() {
    return (
        <section className="work">
           <Header title="Work" subheading="Check my Personal Web Projects.
If you have any queries feel free to ask me for more information"/>

            <div className="work__cards">
                <WorkCard/>
                <WorkCard/>
                <WorkCard/>
                <WorkCard/>
                <WorkCard/>
                <WorkCard/>
                
            </div>
        </section>
    )
}

export default Work
