import React from "react"
import "./footer.css"
import footerimage from "../Homepage/Images/footer.jpg"

const Footer=()=>{
    return(
        <div id="footer">
            <div className="content">
                <h1> <center>Hash/Hub</center></h1>
            </div>
            <h2>© 2021 — 2023</h2>
            <img src={footerimage} alt=""/>
            
        </div>
    )
}
export default Footer;