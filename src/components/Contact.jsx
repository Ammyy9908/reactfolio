import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux';
import { setEmailSent } from '../redux/actions/_appActions';
import "./Contact.css"
import Header from './Header'
import wave from "../mail.wav"
import errorsound from "../error.mp3"
function Field({type,placeholder,name,value,setValue}){
    return(
        <div className="control-field">
            <input type={type} placeholder={placeholder} name={name} value={value} onChange={(e)=>setValue(e.target.value)}/>
        </div>
    )
}
function Contact(props) {
    const [name,setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [message,setMessage] = React.useState('')
    const [caption,setCaption] = React.useState('Send')
    

    const playAudio = async (file)=>{
        const audio = new Audio(file)
        audio.play();
        return true
    }

    const sendMessage = async ()=>{
        
            const r = await axios.post(`https://email-service0.herokuapp.com/feedback`,{
                name,
                email,
                message
            });
            return r.data;
        
    }


    function empty_fields(){
        setEmail('')
        setName('')
        setMessage('')
    }


    const handleContact = (e)=>{
        e.preventDefault();
        setCaption('Sending...')
        sendMessage().then((response)=>{
            console.log(response)
            const {status} = response;

            if(status==="error"){
               
                playAudio(errorsound).then((status)=>{
                    props.setEmailSent({title:"Error while sending message",subheading:"There is an error while sending message please try again",type:"error"})
                    empty_fields()
                    setCaption('Send')
                })
                return false
            }
            playAudio(wave).then((status)=>{
                props.setEmailSent({title:"Message Sent!",subheading:"Your message to sumit is successfully sented!He will respond you shortly.",type:"success"})
                empty_fields()
                setCaption('Sented!')
                setTimeout(()=>{
                    setCaption('Send')
                },5000)
            })
            
            
        }).catch((e)=>{
            console.log("Error ",e)
        })

    }
    return (
        <section className="contact" id="contact">
            <Header title="Contact" subheading="Let me know if you are interested in my service or collaboration I will reply as soon as possible."/>

            <form method="post" onSubmit={handleContact}>
                <Field type="email" name="email" placeholder="Enter your emil address" value={email} setValue={setEmail}/>
                <Field type="name" name="name" placeholder="Enter your full name" value={name} setValue={setName}/>
                <textarea name="message" id="message" cols="30" rows="10" className="message" placeholder="Tell me" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                <button type="submit" className="submit_btn">{caption}</button>
            </form>
        </section>
    )
}


const mapDispatchToProps = (dispatch)=>({
    setEmailSent:(isEmailSent)=>dispatch(setEmailSent(isEmailSent))
})
export default connect(null,mapDispatchToProps)(Contact)
