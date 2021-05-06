import React, { useState, useEffect } from "react"
import "./Team.css"
import group24 from "../Homepage/Images/Group 2.4.png"
// import GitHubIcon from '@material-ui/icons/GitHub';
import GitHubIcon from '@material-ui/icons/GitHub';
import AOS from 'aos';
import 'aos/dist/aos.css';


const TeamSection = () => {
    const [contributors, setContributors] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/repos/vedant-jain03/Hash-Hub/contributors?per_page=1000")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setContributors(data);
            });
    }, []);
    useEffect(()=>{
        AOS.init({duration: 2000});
    },[]);
    return (
        <div id="team">
            <img src={group24} className="group24" alt="" />
            <div className="Content">
                <h1 className="head" data-aos="zoom-in-down">Our Team</h1>
                <p className="para" data-aos="fade-down">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="TeamCards" data-aos="zoom-in-down">
                {
                    contributors.map((item)=>(
                        <div className="cards">
                            <div className="upper">
                                <a href={item.html_url}> <img src={item.avatar_url} className="profile" alt="profile image"/> </a>
                            </div>
                            <div className="lower">
                                <h3>{item.login}</h3>
                                <h4> Collaborator </h4>
                                <a href={item.html_url}> GitHub </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default TeamSection;