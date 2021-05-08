import React from "react"
import "./Contact.css"
import group27 from "../Homepage/Images/Group 2.7.png"
import group26 from "../Homepage/Images/Group 2.6.png"

const Contact =()=>{
    return(
        <div id="contact">
            <div className="content">
                <h1 className="head"><center>Contact Us</center></h1>
                <p className="para"><center>HashHub is with and for you all, contact us whenever you want.</center></p>
            </div>
            <form action="" className="contact-form">
                <input type="text" className="contact-form-text" placeholder="Your Name" />
                <input type="text" className="contact-form-text" placeholder="Your Email" />
                <input type="text" className="contact-form-text" placeholder="Your Phone" />
                <textarea name="" id="" cols="30" rows="10" className="contact-form-text" placeholder="Your Message"></textarea>
                <input className="formbtn" type="Submit" value="Send"></input>
            </form>
            <div className="footer">
            <img src={group26} alt=""/>
            <div>
                <h1>Hash/Hub</h1>
                <h3>Copyright © 2021 — 2023</h3>
            </div>
            <img src={group27} alt=""/>
            </div>
        </div>
    )
}
export default Contact;