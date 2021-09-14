import React from 'react'
import "./Modal.css"
import {MdClose} from "react-icons/md"
import illustration from "../illustration.png"
import error_illustration from "../error.png"

import { connect } from 'react-redux'
import { setEmailSent } from '../redux/actions/_appActions'
function Modal(props) {

    




    return (
        <div className={`modal ${props.isEmailSent && "enable__modal"}`}>
            
            <div className="popup">
                <button className={`popup_close_btn ${props.isEmailSent.type+"__close__btn"}`} onClick={()=>props.setEmailSent(false)}><MdClose/></button>
                <div className="popup__content">
                    <div className="popup__icon">
                        <img src={props.isEmailSent.type==="success"?illustration:error_illustration} alt="ilustration" />
                    </div>
                    <h3>{props.isEmailSent.title}</h3>
                    <p>{props.isEmailSent.subheading}</p>
                    <button className={`done_btn ${props.isEmailSent.type+"__btn"}`} onClick={()=>props.setEmailSent(false)}>{props.isEmailSent.type==="success"?"Done":"Try Again!"}</button>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state)=>({
    isEmailSent:state.appReducer.isEmailSent
})

const mapDispatchToProps = (dispatch)=>({
    setEmailSent:(isEmailSent)=>dispatch(setEmailSent(isEmailSent))
})
export default connect(mapStateToProps,mapDispatchToProps)(Modal)
