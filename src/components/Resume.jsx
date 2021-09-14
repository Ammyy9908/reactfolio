import React from 'react'
import Header from './Header'
import "./Resume.css"

function ResumeSection({course,institution,year}){
    return (<div className="resume__section">
       
        <h5>{course}</h5>
        <p>{institution}</p>
        <time>{year}</time>
    </div>)
}



function Resume() {

    const skills = [
        {
            id:1,
            name:"HTML & CSS",
            level:"intermediate"
        },
        {
            id:2,
            name:"JavaScript",
            level:"intermediate"
        },
        {
            id:3,
            name:"Python",
            level:"intermediate"
        },
        {
            id:4,
            name:"Adobe XD",
            level:"beginner"
        },
        {
            id:5,
            name:"Figma",
            level:"beginner"
        },
        {
            id:6,
            name:"MongoDB",
            level:"intermediate"
        },
        {
            id:7,
            name:"SQL",
            level:"beginner"
        },
        {
            id:8,
            name:"ExpressJS",
            level:"intermediate"
        },
        {
            id:9,
            name:"NodeJS",
            level:"intermediate"
        },
        {
            id:10,
            name:"Firebase",
            level:"intermediate"
        },
        {
            id:11,
            name:"JWT",
            level:"intermediate"
        },
        {
            id:12,
            name:"Oauth",
            level:"beginner"
        },
        {
            id:13,
            name:"REST APIs",
            level:"intermediate"
        },
        {
            id:14,
            name:"GraphQL",
            level:"intermediate"
        },
        {
            id:15,
            name:"ReactJS",
            level:"intermediate"
        },
        {
            id:16,
            name:"Django",
            level:"intermediate"
        },
        {
            id:17,
            name:"Flask",
            level:"beginner"
        },
        {
            id:18,
            name:"Golang",
            level:"beginner"
        },
    ]
    return (
        <div className="resume" id="resume">
            <Header title="Resume" subheading="Passonate Web Developer based on Bangalore,India, Love to deploy Web Apps in Specially in MERN Stack from past 2 Yrs."/>
            <div className="resume__content">
                <h3 className="resume__title">Education</h3>
            <ResumeSection  course="B.E - Information Science & Engineering" institution="Sir M. Visvesvaraya Institute of Technology" year="2019-2022"/>
            <ResumeSection course="Diploma - Computer Science & Engineering" institution="BSF Institute of Technology-Bangalore" year="2016-2019"/>

            <h3 className="resume__title">Work Experience</h3>
            <ResumeSection  course="WEB DEVELOPMENT" institution="THE SPARKS FOUNDATION" year="2021"/>
            <h3 className="resume__title">SKILLS & TOOLS</h3>

            <div className="skills__wrapper">
                {
                    skills.map((skill)=>{
                        return <span className="skill">
                            {skill.name}
                        </span>
                    })
                }
            </div>
            </div>
        </div>
    )
}

export default Resume
