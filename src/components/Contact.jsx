import React from 'react'
import "./Contact.css"
import Header from './Header'

function Field({type,placeholder,name}){
    return(
        <div className="control-field">
            <input type={type} placeholder={placeholder} name={name} />
        </div>
    )
}
function Contact() {
    return (
        <section className="contact">
            <Header title="Contact" subheading="Let me know if you are interested in my service or collaboration I will reply as soon as possible."/>

            <form action="">
                <Field type="email" name="email" placeholder="Enter your emil address"/>
                <Field type="name" name="name" placeholder="Enter your full name"/>
                <textarea name="message" id="message" cols="30" rows="10" className="message" placeholder="Tell me"></textarea>
                <button type="submit" className="submit_btn">Send</button>
            </form>
        </section>
    )
}

export default Contact
