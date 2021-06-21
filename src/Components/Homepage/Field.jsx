import React, { useState, useEffect } from "react"
import "./Field.css"
import ItemsCarousel from 'react-items-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Opensource from "../Fields/Open-source/Opensource"
import { Link } from "react-router-dom";
import Ai from "../Fields/AI/Ai"

const Field = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);

    return (
        <div id="field">
            <center><h1 className="head" data-aos="zoom-in-down">Our Tools</h1></center>
            <center><p className="para" data-aos="fade-down">We have provided tools for students to make thier profile and work more Professional. Just Have a look!</p></center>
            {/* <div className="slider"> */}
            <div style={{ padding: `0 ${chevronWidth}px`, background: 'hsl(0deg 0% 0% / 30%)', marginTop: '1rem', boxShadow: 'inset 10px 5px 51px 27px #0000005c' }} className="homepagecards"  >

                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    gutter={15}
                    leftChevron={<button style={{ fontSize: '2rem', padding: '40px 10px', border: 'none', background: 'rgb(40 44 52 / 47%)', marginLeft: '-2px', color: 'white', cursor: 'pointer' }}>{'<'}</button>}
                    rightChevron={<button style={{ fontSize: '2rem', padding: '40px 10px', border: 'none', background: 'rgb(40 44 52 / 47%)', color: 'white', cursor: 'pointer', marginRight: '0' }}>{'>'}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >

                    <div className="card">
                        <div className="card-content">
                            <h2 className="card-title">Resume Maker</h2>
                            <p className="card-body">Resume Maker is tool where you can generate your resume for free. It has functionality like dynamic preview, color themes, responsive ,etc.</p>
                            <a href="https://vedant-jain03.github.io/Resume-Maker/" className="button">Use Tool</a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-content">
                            <h2 className="card-title">Repository Readme.md Generator</h2>
                            <p className="card-body">This is Repository Readme.md Generator Which you can use to create your repostory readme which represent your repo more interesting..</p>
                            <a href="https://vedant-jain03.github.io/Repo-Readme-Md-Generator/" className="button">Use Tool</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <h2 className="card-title">Github Profile Readme Generator</h2>
                            <p className="card-body">This is Profile Readme Generator Which you can use to create your github profile readme.It has so many section which will make your profile cooler then ever.</p>
                            <a href="https://vedant-jain03.github.io/Github-Profile-Readme-Generator/" className="button">Use Tool</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <h2 className="card-title">Certificate Generator</h2>
                            <p className="card-body">This is Certificate Generator which you can use to make e-certificate and download as a pdf and then you can distribute the certificates to the students.</p>
                            <a href="https://vedant-jain03.github.io/certificate-generator/" className="button">Use Tool</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <h2 className="card-title">Web Compiler</h2>
                            <p className="card-body">This is a tool you can use to structure design and preview the design simultanously. You can type HTML,CSS and JS here.</p>
                            <a href="https://yashikajotwani12.github.io/Web-Compiler/" className="button">Use Tool</a>
                        </div>
                    </div>
                </ItemsCarousel>
                {/* </div> */}
            </div>
        </div>
    )
}
export default Field;