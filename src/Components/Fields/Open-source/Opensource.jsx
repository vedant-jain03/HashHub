import React, { useEffect, useState } from "react"
import "./Opensource.css"
import StarRateIcon from '@material-ui/icons/StarRate';
import AOS from 'aos';
import 'aos/dist/aos.css';
import group27 from "../images/Group 2.7.png"
import group26 from "../images/Group 2.6.png"
import { Link } from "react-router-dom";
const Opensource = () => {
    const programs = [
        {
            name: "Google Summer of Codes",
            about: "Google Summer of Code program is a program started by Google and has completed 16 years. It is a program that aims to promote open-source software development among university students. There are a few organizations and these organizations have mentors. First, the organizations apply to Google and after the organizations are selected then the students apply to the organizations. Stipend: 1500 USD",
            time: "3 Months",
            link: "https://summerofcode.withgoogle.com/"
        },
        {
            name: "MLH Fellowship",
            about: "The MLH Fellowship is a remote internship alternative for aspiring technologists. Spend 12 weeks building your skills by collaborating on real-world projects. Stipend: 5000 USD",
            time: "12 Weeks",
            link: "https://fellowship.mlh.io/"
        },
        {
            name: "Google Summer of Docs",
            about: "Season of Docs is an annual program organised by Google. Its goal is to bring technical writers and open source organisations together to foster collaboration and improvement of documentation in the Open Source space.",
            time: "3 Months",
            link: "https://developers.google.com/season-of-docs"
        },
        {
            name: "Outreachy",
            about: "Outreachy is a diversity initiative that provides paid, remote internships to people subject to systemic bias and impacted by underrepresentation in the technical industry where they are living.Outreachy provides internships to work on open source. Stipend: 6000 USD",
            time: "3 Months",
            link: "https://www.outreachy.org/"
        },
        {
            name: "Season of KDE",
            about: "Every year since 2013, KDE Student Programs has been running Season of KDE as a program similar to, but not quite the same as Google Summer of Code, offering an opportunity to everyone (not just students) to participate in both code and non-code projects that benefits the KDE ecosystem. In the past few years, SoK participants have not only contributed new application features but have also developed the KDE Continuous Integration System, statistical reports for developers, a web framework, ported KDE Applications, created documentation and lots and lots of other work.",
            time: "3 Months",
            link: "https://season.kde.org/"
        },
        {
            name: "Hacktober Fest",
            about: "Hacktoberfest is a really popular open-source program that is hosted by Digital Ocean and is open to everyone across the world. Here, you need to submit four or more quality pull requests and you’ll either get a chance to plant a tree or get a limited-edition t-shirt. The main idea over here is that there’s no such thing as a selection-criteria in this particular program. So, this is very useful for individuals, in particular, who are just starting out with open source. You can contribute to participating projects on GitHub and even if you’re not able to make a large major contribution what you can get out of it is how to use Git and Github.",
            time: "3 Months",
            link: "https://hacktoberfest.digitalocean.com/"
        },
        {
            name: "Girlscript Summer of Codes",
            about: "GirlScript Summer of Code is the 3 month long Open Source program during summers conducted by GirlScript Foundation, started in 2018, with an aim to help beginners get started with Open Source Development while encouraging diversity. Throughout the program, participants contribute to different projects under guidance of experienced mentors. Top participants get exciting goodies and opportunities.",
            time: "3 Months",
            link: "https://gssoc.girlscript.tech/"
        },
        {
            name: "Open Summer of Codes",
            about: "It is organized by Open Knowledge Belgium. All students will work in teams on different open-source innovation projects provided by partnering organizations, companies, and even governments. You don’t necessarily have to be staying in Belgium to apply for Open Summer of Code, but you have to be allowed to work as a student under the Belgian regulation.",
            time: "3 Months",
            link: "https://osoc.be/"
        }
    ]
    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);

    return (
        <div id="opensource">
            <div id="landingpage">
                <h1><center><Link to="/" style={{textDecoration:'none', position: 'absolute',top: '26%',left: '4rem',color: '#ff9800'}} id="backtoHashhub" >Hash/Hub</Link></center></h1>
                <div className="content">
                    <h1>Open-Source</h1>
                    <p>Open source as term described is source code that is freely available for possible modification and redistribution. <br />  For Example, TensorFlow library in Python is Open-source i.e., the code of the library is freely available and you can modify, edit or distribute the code.</p>
                </div>
                <img src="https://www.pngkey.com/png/full/492-4928937_website-development-auckland-design-system-illustration.png" alt="" />
            </div>
            <div className="components-OS" data-aos="fade-left">
                <h1>Main Components of Open Source Contributions</h1>
                <img src="https://www.westcodesoft.com/wp-content/uploads/2017/08/Open-Source-Software.jpeg" alt="os" />
                <h2>Organisation:</h2>
                <br />
                <p data-aos="fade-right">Open Source Organisations are Organisation or might be Umbrella Organisations that owns the particular source code or project or software you want to contribute to.
                <br />
                Top Open Source Organisation: RedHat Softwares,Linux Foundation, Mozilla Corporation etc.
                </p>
                <br /><br />
                <h2>Contributors:</h2>
                <br />
                <p data-aos="fade-right">Open Source Contributors are programmers /  developers who modify in the source code of Organisation. Simply those who contribute to Source codes of Open Source Organisation are Contributors.</p>
                
            </div>
            <div className="benefits-os">
                <h1>Perks & Benefits of Open Source Contributions</h1>
                <ul>
                    <li data-aos="fade-right"><p>Hands on experience with working on a live project.</p></li>
                    <li data-aos="fade-right"><p>Stipend and cool swaps for participant in open source programs.</p></li>
                    <li data-aos="fade-right"><p>Community and connection building.</p></li>
                    <li data-aos="fade-right"><p>As we code for real-world open-source projects.A small contribution makes a big difference to millions of users who use open source softwares daily.</p></li>
                    <li data-aos="fade-right"><p>It refines our existing knowledge of programming and also helps us to learn new skills.</p></li>
                    <li data-aos="fade-right"><p>The most important aspect of open-source contributions is It may fetch us a job in our field of interest.</p></li>
                </ul>
            </div>
            <div className="prereq-os">
                <h1>What are Prerequisites to contribute to Open Source</h1>
                <img src="https://raw.githubusercontent.com/halfrost/halfrost/master/icons/header_.png" alt="" />
                <ul>
                    <li data-aos="fade-right"><p>Basic commands of Version Control: Git</p></li>
                    <li data-aos="fade-right"><p>Good Knowledge of Github/ Gitbucket / Gitlab</p></li>
                    <li data-aos="fade-right"><p>Some programs like Google Summer of Docs not need any programming language just they need a good content writer. But Majority is with, it's better to have a good command in any of programming language, library or frameworks. Like python, JS,ruby on rails etc.</p></li>
                </ul>
            </div>
            <div className="programs-os">
                <center><h1>Programs of Open source for Students</h1></center>
                <div className="wrapper">
                    <div className="center-line">
                    </div>
                    {
                        programs.map((program, index) => (
                            index % 2 === 0 ? (

                                <div className="row row-1" data-aos="fade-down">
                                    <section>
                                        <i className="icon"> <StarRateIcon style={{ fontSize: '38px' }} /> </i>
                                        <div className="details">
                                            <span className="title">{program.name}</span>
                                            <span>{program.time}</span>
                                        </div>
                                        <p>{program.about}</p>
                                        <div className="bottom">
                                            <a href={program.link}>Read More</a>
                                        </div>
                                    </section>
                                </div>
                            ) :
                                (
                                    <div className="row row-2" data-aos="fade-down">
                                        <section>
                                            <i className="icon"> <StarRateIcon style={{ fontSize: '38px' }} /> </i>
                                            <div className="details">
                                                <span className="title">{program.name}</span>
                                                <span>{program.time}</span>
                                            </div>
                                            <p>{program.about}</p>
                                            <div className="bottom">
                                                <a href={program.link}>Read More</a>
                                            </div>
                                        </section>
                                    </div>
                                )
                        ))
                    }
                </div>
            </div>
            
            <div className="mostusedlang">
                <h1>Most Famous and Used Language in Open-source</h1>
                <img src="https://cdn-media-1.freecodecamp.org/images/1*-GxMW33X9Gb5lboyN02hKw.png" alt="" />
            </div>
            <div className="footer" id="explore-footer" style={{background: 'none'}}>
                <img src={group26} alt="" />
                <div>
                    <h1>Hash/Hub</h1>
                    <h3>Copyright © 2021 — 2023</h3>
                </div>
                <img src={group27} alt="" />
            </div>
        </div>
    )
}
export default Opensource;