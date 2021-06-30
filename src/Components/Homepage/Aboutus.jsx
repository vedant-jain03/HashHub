import React, { useEffect } from 'react'
import "./About.css"
import g2 from "../Homepage/Images/Group 2.png"
import g23 from "../Homepage/Images/Group 23.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Aboutus = () => {
    useEffect(()=>{
        AOS.init({duration: 3000});
    },[]);

    return (
        <div id="About">
            <div className="content" >
                <h2 data-aos="zoom-in-down" ><span>About</span> Us</h2>
                <p data-aos="fade-up">Hash/Hub is here to provide everything that revolves around your engineering degree, we have tools,generators,resourses, roadmaps, experiences, programs, competetions, tips and tricks to not just master your degree but also explore and enjoy every aspect of being an engineer with a full pack of knowledges. </p>
                <Link to="/Explore" className="primary" data-aos="flip-up">Explore</Link>
             </div>
            <img src={g2} data-aos="fade-left" className="g2" alt=""/>
            <img src={g23} data-aos="fade-right" className="g23" alt=""/>
        </div>
    )
}
export default Aboutus;