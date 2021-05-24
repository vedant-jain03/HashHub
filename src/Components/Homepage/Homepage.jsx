import React, { useState } from "react"
import "./Homepage.css"
import bird1 from "../Homepage/Images/bird1.png";
import bird2 from "../Homepage/Images/bird2.png";
import forest from "../Homepage/Images/forest.png";
import rocks from "../Homepage/Images/rocks.png";
import water from "../Homepage/Images/water.png";
import Aboutus from "../Homepage/Aboutus"
import TeamSection from "../Homepage/TeamSection"
import Field from "../Homepage/Field"
import Contact from "../Homepage/Contact"
import Explore from "../Explore/Explore"
import { Link } from "react-router-dom";
import "../Explore/Explore.css"
import Opensource from "../Fields/Open-source/Opensource"

const Homepage = () => {
    const [offset,setOffset]=useState()
    const handleScroll=()=>setOffset(window.pageYOffset)
    window.addEventListener('scroll',handleScroll)
    return (
        <div className="container">
            <div className="header" style={{top:offset*0.25+'px'}}>
                <a href="#" className="logo">Hash/Hub</a>
                <ul>
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#About">About Us</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#field">Field</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
            <div className="landingpage">
                <h2 id="text"  style={{top:20+ offset * -0.1+'%'}}>Find your right path with <span><br/>Hash/Hub</span></h2>
                <img src={bird1} style={{top:offset* -1.5 + 'px',left:offset*2+'px'}} id="bird1" alt=""/>
                <img src={bird2} style={{top:offset* -1.5 + 'px',left:offset*-2+'px'}}id="bird2" alt=""/>
                <img src={forest} style={{top:offset*0.25+'px'}} id="forest" alt=""/>
                <Link to="/Explore" id="btn" style={{marginTop:offset*1.5+'px'}}>Explore</Link>
                <img src={rocks} id="rocks" style={{top:offset* - 0.12 + 'px'}} alt=""/>
                <img src={water} id="water" alt=""/>
            </div>
            <div className="Section">
            <Aboutus/>
            </div>
            <Field />
            <TeamSection/>
            
            <Contact />
        </div>
    )
}
export default Homepage;