import React from 'react'

function Header({title,subheading}) {
    return (
        <div className="section__header">
        <h1>{title}</h1>
        <p className="section_subheading">{subheading}</p>
    </div>
    )
}

export default Header
