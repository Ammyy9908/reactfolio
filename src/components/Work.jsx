import React from 'react'
import "./Work.css"
import {FiEye} from "react-icons/fi"
import {FaGithub} from "react-icons/fa"
import Header from './Header'
import { connect } from 'react-redux'
function WorkCard({thumb,name,tags,repo,url,desc}){


    const handleNavigation = (url)=>{
        window.location.href =url;
    }

    
   
    return <div className="work_card">
        <div className="card__thumb">
            <div className="card__thumb__image">
                <img src={thumb} alt="project__thumb" />
            </div>
        </div>
        <span className="work__title">{name}</span>
        <div className="work_tags">
           
            
            {
                tags.map((tag)=>{
                    return <span>{tag}</span>
                })
            }
        </div>
        <p className="work_desc">{desc}</p>
        <div className="work__controls">
            <button className="btn preview_btn" onClick={()=>handleNavigation(url)}>
                <FiEye/> Preview
            </button>
            {repo && <button className="btn repo_btn" onClick={()=>handleNavigation(repo)}>
                <FaGithub/>
                Github Repo
            </button>}
        </div>
    </div>
}
function Work(props) {
    return (
        <section className="work" id="work">
           <Header title="Work" subheading="Check my Personal Web Projects.
If you have any queries feel free to ask me for more information"/>

            <div className="work__cards">
               
               

                {
                    props.works && props.works.map((work,i)=>{
                        return  <WorkCard key={i} thumb={work.thumb} name={work.name} tags={work.tags} desc={work.description} repo={work.repo} url={work.url}/>
                    })
                }
                
            </div>
        </section>
    )
}


const mapStateToProps = (state)=>(
    {works:state.appReducer.works}
)

export default connect(mapStateToProps,null)(Work)
