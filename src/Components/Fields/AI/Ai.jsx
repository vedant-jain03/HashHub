import React, { useEffect } from "react";
import "./ai.css";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from "aos";
import Yt from "./Yt";
import group27 from "../images/Group 2.7.png"
import group26 from "../images/Group 2.6.png"

function Card(props){
    return(
    <>
    <div id='cards'>
        <div id='card'>
            <img src={props.imgsrc} alt="myPic" id="card_img"></img>
            <div id ="card_info">
                <span id="card_category">{props.title}</span>
                <h3 id="card_title">{props.sname}</h3>
                <a href={props.link} target="blank">
                    <button> Visit Channel</button>
                </a>
            </div>
        </div>
    </div>
    
    </>
    );
    }
function ncard(val){
    return(
        <Card imgsrc = {val.imgsrc} 
        title = {val.title}
         sname = {val.sname} 
         link = {val.link} 
    />
    );
}
const Ai = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        
        
            <div id="ai">
                <div id="container">
                    <div id="left">
                        <h1><center><Link to="/" style={{ textDecoration: 'none', position: 'absolute', top: '26%', left: '4rem', color: '#ff9800' }}>Hash/Hub</Link></center></h1>

                        <h2>Artificial Intelligence</h2>
                        <p>Intelligence, as we know, is the ability to acquire and apply the knowledge. Knowledge is the information acquired through experience. Experience is the knowledge gained through exposure(training). Summing the terms up, we get artificial intelligence as the “copy of something natural(i.e., human beings) ‘WHO’ is capable of acquiring and applying the information it has gained through exposure.”</p>
                    </div>
                    <div id="right">
                        <img src="https://www.pngkey.com/png/full/492-4928937_website-development-auckland-design-system-illustration.png" alt="" />
                    </div>
                </div>
                <div id="container1">
                    <h1 data-aos="fade-right">What is Artificial Intelligence ?</h1>
                    <p data-aos="fade-left"> <strong><em> "Artificial Intelligence (AI) involves using computers to do things that traditionally require human intelligence. This means creating algorithms to classify, analyze, and draw predictions from data. It also involves acting on data, learning from new data, and improving over time. Just like a tiny human child growing up into a (sometimes) smarter human adult. And like humans, AI is not perfect. Yet." </em></strong> </p>
                    <p data-aos="fade-right">We look at many applications of AI in our day-to-day life which involves</p>
                    <ul  data-aos="fade-right" style={{ marginLeft: '2rem', marginRight: '2rem' }}>
                        <li><span>Task automation: </span> repetitive back-office tasks such as clerical work, invoicing, and management reporting can be automated to save time and improve accuracy. Factory and warehouse work can also be automated using AI-powered robots.</li>
                        <li><span>Social media: </span> Facebook uses AI to recognize faces. When you upload photos to Facebook, it puts a box around the faces in the photo and suggests friends’ names to tag.</li>
                        <li><span>Customer support:  </span> remember the online text chat you had with your bank’s customer support? That may have been a chatbot instead of an actual human</li>
                        <li><span>Self-driving cars: </span> Onboard cameras and computers identify objects and people on the road, follow traffic signs, and drive the car. Early models are already safer than human drivers.</li>
                    </ul>
                </div>
                <div id="container2">
                    <h1 data-aos="fade-right">Implementation of AI</h1>
                    <ul data-aos="fade-right" style={{ marginLeft: '2rem', marginRight: '2rem' }}>
                    <p data-aos="fade-left">Artificial Intelligence is broadly categorised into two Categories:- </p>
                        <li><span> Narrow AI </span> <br /> Sometimes referred to as "Weak AI," this kind of artificial intelligence operates within a limited context and is a simulation of human intelligence. Narrow AI is often focused on performing a single task extremely well and while these machines may seem intelligent, they are operating under far more constraints and limitations than even the most basic human intelligence. </li>
                        <li><span> Artificial General Intelligence (AGI)</span> <br /> AGI, sometimes referred to as "Strong AI," is the kind of artificial intelligence we see in the movies, like the robots from Westworld or Data from Star Trek: The Next Generation. AGI is a machine with general intelligence and, much like a human being, it can apply that intelligence to solve any problem.  </li>
                    </ul>
                    <img data-aos="zoom-in-left" src="https://cdn.pixabay.com/photo/2019/04/03/12/04/home-4100193_960_720.jpg" alt=""></img>
                </div>
                <div id="headin">
                <h1 data-aos="fade-left">Learning Resources</h1>
                </div>
                <div id="container3" data-aos="zoom-in-left">
                <div id="wrapper">
                {Yt.map(ncard)}
                </div>
                </div>
                <div id="container4">
                    <h1 data-aos="fade-right">AI Adaption in Industries</h1>
                    <img data-aos="zoom-in-left" src="https://www.oreilly.com/radar/wp-content/uploads/sites/3/2020/02/3-functional-parts-of-companies.png" alt=""></img>
                </div>
                <div className="footer" id="explore-footer" style={{background: 'none'}}>
                <img src={group26} alt="" style={{marginTop:'6rem'}} />
                <div>
                    <h1>Hash/Hub</h1>
                    <h3>Copyright © 2021 — 2023</h3>
                </div>
                <img src={group27} alt=""  style={{marginTop:'6rem'}}/>
                </div>

                
            </div>
            
    )
}
export default Ai;