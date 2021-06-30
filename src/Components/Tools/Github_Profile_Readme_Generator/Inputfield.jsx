import React, { useState } from "react"
import "./Inputfield.css"
const Inputfield = () => {
    const [heading, setheading] = useState("Myself Vedant Jain");
    const [subtitle, setsubtitle] = useState("Enthusiastic Learner 📖 | Web Developer 💻");
    const [banner, setbanner] = useState("https://raw.githubusercontent.com/halfrost/halfrost/master/icons/header_.png");
    const [about, setabout] = useState("");
    const [college, setcollege] = useState("");
    const [skills, setskills] = useState("HTML, CSS, JS, C++, React ,Firebase, C ");
    const [doing1, setdoing1] = useState("");
    const [doing2, setdoing2] = useState("");
    const [doing3, setdoing3] = useState("");
    const [doing4, setdoing4] = useState("");
    const [doing5, setdoing5] = useState("");
    const [doing6, setdoing6] = useState("");
    const [social1, setsocial1] = useState("");
    const [social2, setsocial2] = useState("");
    const [social3, setsocial3] = useState("");
    const [social4, setsocial4] = useState("");
    const [social5, setsocial5] = useState("");
    const [social6, setsocial6] = useState("");
    const [githubprofile, setgithubprofile] = useState("");
    const [prviews, setprviews] = useState(false);
    const [trophy, settrophy] = useState(false);
    const [streak, setstreaks] = useState(false);
    const [languse, setlanguse] = useState(false);
    const [readmestate, setreadmestate] = useState(false);

    return (
        <div id="profile_readme">
            <div className="header-container">
                <h1>Github Profile Readme Generator</h1>
                <h2>Hash/Hub</h2>
                <h3 align="center" style={{fontWeight:'400'}}>This is Github Profile Readme Generator, Made using React. You can fill the input field as you want, you can select add-on feature you want to see in your profile. The Readme final Code is below , you just have to copy and paste to your readme file.
                    If you like the project Kindly Star the Project
                </h3>
            </div>
            <div id="lower-container">
                <div className="left-side">
                    <div className="container left">
                        <div id="header">
                            <div className="title">Header</div>
                            <form className="form section1">
                                <div className="user-details">
                                    <div className="input-box">
                                        <span className="details">Heading</span>
                                        <input type="text" placeholder="Myselft Vedant Jain" onChange={(e) => { setheading(e.target.value) }} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Subtitle</span>
                                        <input type="text" placeholder="Enthusiastic Learner 📖 | Web Developer 💻" onChange={(e) => { setsubtitle(e.target.value) }} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Banner</span>
                                        <input type="text" placeholder="https://raw.githubusercontent.com/halfrost/halfrost/master/icons/header_.png" onChange={(e) => { setbanner(e.target.value) }} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Description</span>
                                        <textarea name="" id="" cols="30" rows="10" placeholder="Enter Your Description" onChange={(e) => { setabout(e.target.value) }}></textarea>
                                    </div>
                                    <div className="input-box">
                                        <span className="details">College</span>
                                        <input type="text" placeholder="Gyan Ganga Institute of Technology and Sciences" onChange={(e) => { setcollege(e.target.value) }} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Skills</span>
                                        <input type="text" placeholder="HTML, CSS, JS, C++, React ,Firebase, C" onChange={(e) => { setskills(e.target.value) }} />
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="container left">
                        <div id="More-info">
                            <div className="title">What Are You Doing Now?</div>
                            <form className="form section1">
                                <div className="user-details">
                                    <div className="input-box">
                                        <span className="details"> 🚧 I’m currently working on...</span>
                                        <input type="text" placeholder="Your Answer Here" onChange={e => { setdoing1(e.target.value) }} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details"> 🗡️ Look At My this Project... </span>
                                        <input type="text" placeholder="Your Answer Here" onChange={e => { setdoing2(e.target.value) }} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details"> 📑 I'm Currently Learning...</span>
                                        <input type="text" placeholder="Your Answer Here" onChange={e => { setdoing3(e.target.value) }} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details"> 🏴󠁧󠁢󠁷󠁬󠁳󠁿 My Personal Website... </span>
                                        <input type="text" placeholder="Your Answer Here" onChange={e => { setdoing4(e.target.value) }} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details"> 🏅 My Favourite Hobby...</span>
                                        <input type="text" placeholder="Your Answer Here" onChange={e => { setdoing5(e.target.value) }} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details"> 📣 Ask Me About... </span>
                                        <input type="text" placeholder="Your Answer Here" onChange={e => { setdoing6(e.target.value) }} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="container left">
                        <div id="social-media">
                            <div className="title">Connect With Me </div>
                            <form className="form section1">
                                <div className="user-details">
                                    <div className="input-box">
                                        <span className="details"> <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codechef.svg" alt="" style={{ width: '2rem' }} />  </span>
                                        <input type="text" placeholder="Your Answer Here" onChange={e => { setsocial1(e.target.value) }} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details"> <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg" alt="" style={{ width: '2rem' }} />  </span>
                                        <input type="text" placeholder="Your Answer Here" onChange={e => { setsocial2(e.target.value) }} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details"> <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="" style={{ width: '2rem' }} />  </span>
                                        <input type="text" placeholder="Your Answer Here" onChange={e => { setsocial3(e.target.value) }} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details"> <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="" style={{ width: '2rem' }} />  </span>
                                        <input type="text" placeholder="Your Answer Here" onChange={e => { setsocial4(e.target.value) }} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details"> <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/youtube.svg" alt="" style={{ width: '2rem' }} />  </span>
                                        <input type="text" placeholder="Your Answer Here" onChange={e => { setsocial5(e.target.value) }} />
                                    </div>
                                    <div className="input-box">
                                        <span className="details"> <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/reddit.svg" alt="" style={{ width: '2rem' }} />  </span>
                                        <input type="text" placeholder="Your Answer Here" onChange={e => { setsocial6(e.target.value) }} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="container add-ons">
                        <div className="title">Add on Features</div><br />
                        <div className="input-box">
                            <span className="details"> <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="" style={{ width: '2rem' }} />  </span>
                            <input id="ao" type="text" placeholder="Enter Your Github Username" onChange={e => { setgithubprofile(e.target.value) }} />
                        </div>
                        <div className="add-on-features">
                            <label htmlFor="pr-views">Add Profile Views</label>
                            <input type="checkbox" id="pr-views" checked={prviews === true ? true : false} onClick={e => { setprviews(!prviews) }} /><br /><br />
                            <label htmlFor="trophy">Add Trophies Section</label>
                            <input type="checkbox" id="trophy" checked={trophy === true ? true : false} onClick={e => { settrophy(!trophy) }} /><br /><br />
                            <label htmlFor="streak">Add Streaks Section</label>
                            <input type="checkbox" id="streak" checked={streak === true ? true : false} onClick={e => { setstreaks(!streak) }} /><br /><br />
                            <label htmlFor="languse">Add Top Language Usage</label>
                            <input type="checkbox" id="languse" checked={languse === true ? true : false} onClick={e => { setlanguse(!languse) }} /><br /><br />
                            <label htmlFor="readmestate">Add Readme State</label>
                            <input type="checkbox" id="readmestate" checked={readmestate === true ? true : false} onClick={e => { setreadmestate(!readmestate) }} /><br /><br />

                        </div>
                    </div>
                </div>
                <div id="right-container">
                    <div className="container right">
                        <div className="title">Preview</div><br /><br />
                        <div className="profile-preview">
                            <center><h1>Hello There 🤙, {heading === "" ? "Myself Vedant Jain" : heading} </h1></center><br />
                            <center><h2> {subtitle === "" ? "Enthusiastic Learner 📖 | Web Developer 💻" : subtitle} </h2></center><br />
                            <img src={banner === "" ? "https://raw.githubusercontent.com/halfrost/halfrost/master/icons/header_.png" : banner} id="profile-banner" alt="" />
                            <br /><br />
                            <center><h4 style={{ fontWeight: '500' }}>{about === "" ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae, necessitatibus mollitia suscipit aperiam quod debitis vitae commodi aliquam accusamus ad, odit facilis natus. Delectus repellendus iste nulla fugit possimus." : about}</h4></center>
                            <br />

                            <h3>Skills: {skills === "" ? "HTML, CSS, JS, C++, React ,Firebase, C " : skills}</h3>
                            <br />
                            <h3>{college === "" ? "Gyan Ganga Institute of Technology and Sciences" : college}</h3>
                            <br />
                            <img src="https://img.shields.io/badge/focus-FullStack-brightgreen" alt="" />
                            <br />
                            <br />
                            {prviews === false ? '' : <p align="left"> <img src={`https://komarev.com/ghpvc/?username=${githubprofile}&label=Profile%20views&color=0e75b6&style=flat`} alt={githubprofile} /> </p>}
                            <br />
                            {/* <p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=vedant-jain03" alt="vedant-jain03" /></a> </p> */}
                            <h2>{(doing1 === '' && doing2 === '' && doing3 === '' && doing4 === '' && doing5 === '' && doing6 === '') ? "" : "What I am Doing"}</h2>
                            <br />
                            <h3>{doing1 === "" ? "" : "🚧 I’m currently working on " + doing1}</h3>
                            <br />
                            <h3> {doing2 === "" ? "" : "🗡️ Look At My this Project  " + doing2}</h3>
                            <br />
                            <h3> {doing3 === "" ? "" : "📑 I'm Currently Learning " + doing3}</h3>
                            <br />
                            <h3>{doing4 === "" ? "" : "🏴󠁧󠁢󠁷󠁬󠁳󠁿 My Personal Website " + doing4}</h3>
                            <br />
                            <h3>{doing5 === "" ? "" : "🏅 My Favourite Hobby " + doing5}</h3>
                            <br />
                            <h3>{doing6 === "" ? "" : "📣 Ask Me About " + doing6}</h3>
                            <br />
                            <br />
                            <h2>{(social1 === '' && social2 === '' && social3 === '' && social4 === '' && social5 === '' && social6 === '') ? "" : "Connect Me In"}</h2>
                            <br />
                            {social1 === "" ? "" : <a href={social1 === '' ? '' : social1}> <img src={social1 === '' ? '' : "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codechef.svg"} style={{ width: '2rem', marginRight: '1rem' }} />  </a>}

                            {social2 === "" ? "" : <a href="#"> <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg" alt="Facebook" style={{ width: '2rem', marginRight: '1rem' }} />  </a>}
                            {social3 === "" ? "" : <a href="#"> <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="Instagram" style={{ width: '2rem', marginRight: '1rem' }} />  </a>}
                            {social4 === "" ? "" : <a href="#"> <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="Linkedin" style={{ width: '2rem', marginRight: '1rem' }} />  </a>}
                            {social5 === "" ? "" : <a href="#"> <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/youtube.svg" alt="Youtube" style={{ width: '2rem', marginRight: '1rem' }} />  </a>}
                            {social6 === "" ? "" : <a href="#"> <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/reddit.svg" alt="Reddit" style={{ width: '2rem', marginRight: '1rem' }} />  </a>}

                            {
                                trophy === false ? ' ' : <p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src={`https://github-profile-trophy.vercel.app/?username=${githubprofile}`} style={{ width: '33rem' }} alt={githubprofile} /></a> </p>
                            }
                            <br />
                            {
                                streak === false ? ' ' : <p><img align="center" src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubprofile}&`} alt={githubprofile} style={{ width: '50%' }} /></p>

                            }
                            {
                                languse === false ? ' ' : <p><img align="left" src={`https://github-readme-stats.vercel.app/api/top-langs?username=${githubprofile}&show_icons=true&locale=en&layout=compact`} alt="vedant-jain03" /></p>
                            }
                            {
                                readmestate === false ? ' ' : <p><img align="center" src={`https://github-readme-stats.vercel.app/api?username=${githubprofile}&show_icons=true&locale=en`} alt="vedant-jain03" /></p>

                            }
                        </div>
                    </div>
                    
                </div>

            </div>
            <div className="container right" id="code-sample">
                <div className="title">Code</div><br /><br />
                <div id="code">
                    <div className="final-code">
                        <p>{`<h1 align="center">Hello There 🤙,${heading} </h1>`}</p>
                        <p>{` <h3 align="center"> ${subtitle} </h3> `}</p><br />
                        <p>{`![](${banner === ''?'https://raw.githubusercontent.com/halfrost/halfrost/master/icons/header_.png':banner})`}</p><br />
                        <p>{`<p align="center"> ${about} </p>`}</p>
                        <p>{`<h3> Skills: ${skills}</h3>`}</p>
                        <p>{`<h3> College: ${college} </h3> <br />`}</p>
                        <p>{prviews === false ? '' : `<p align="left"> <img src="https://komarev.com/ghpvc/?username=${githubprofile}&label=Profile%20views&color=0e75b6&style=flat" alt="${githubprofile}">  </p>`}</p>
                        {(doing1 === '' && doing2 === '' && doing3 === '' && doing4 === '' && doing5 === '' && doing6 === '') ? ""
                            :
                            <p>{`<h2 align="left"> What I am Doing? </h2>`}</p>
                        }
                        {doing1 === "" ? "" : <p>{` <h3>🚧 I’m currently working on ${doing1}</h3> `}</p>}
                        {doing2 === "" ? "" : <p>{` <h3>🗡️ Look At My this Project ${doing2}</h3> `}</p>}
                        {doing3 === "" ? "" : <p>{` <h3>📑 I'm Currently Learning ${doing3}</h3> `}</p>}
                        {doing4 === "" ? "" : <p>{` <h3>🏴󠁧󠁢󠁷󠁬󠁳󠁿 My Personal Website ${doing4}</h3> `}</p>}
                        {doing5 === "" ? "" : <p>{` <h3>🏅 My Favourite Hobby ${doing5}</h3> `}</p>}
                        {doing6 === "" ? "" : <p>{` <h3>📣 Ask Me About ${doing6}</h3> `}</p>}
                        <br />
                        {(social1 === '' && social2 === '' && social3 === '' && social4 === '' && social5 === '' && social6 === '') ? "" :
                            <p>{`<h2 align="center">Connect Me In</h2>`}</p>}


                        {
                            <p>{
                                (social1 === "" ? "" : `<a href=${social1 === '' ? '' : `"${social1}"`} target="black" alt=${social1}> <img src= '${social1 === '' ? '' : "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codechef.svg"}' height="30" width="40" />  </a>`) + (social2 === "" ? "" : `<a href=${social2 === '' ? '' : `"${social1}"`} target="black" alt=${social2}> <img src= '${social2 === '' ? '' : "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg"}' height="30" width="40" />  </a>`) + (social3 === "" ? "" : `<a href=${social3 === '' ? '' : `"${social1}"`} target="black" alt=${social3}> <img src= '${social3 === '' ? '' : "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"}' height="30" width="40" />  </a>`) + (social4 === "" ? "" : `<a href=${social4 === '' ? '' : `"${social1}"`} target="black" alt=${social4}> <img src= '${social4 === '' ? '' : "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"}' height="30" width="40" />  </a>`) + (social5 === "" ? "" : `<a href=${social5 === '' ? '' : `"${social1}"`} target="black" alt=${social5}> <img src= '${social5 === '' ? '' : "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/youtube.svg"}' height="30" width="40" />  </a>`) + (social6 === "" ? "" : `<a href=${social6 === '' ? '' : `"${social1}"`} target="black" alt=${social6}> <img src= '${social6 === '' ? '' : "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/reddit.svg"}' height="30" width="40" />  </a>`)
                            }
                            </p>
                        }
                        <p>{trophy===false?'':`<p align="left"> <img src="https://github-profile-trophy.vercel.app/?username=${githubprofile}"  alt="${githubprofile}"> </p>`}</p>
                        <p>{streak === false ? '' : `<p align="left"> <img src="https://github-readme-streak-stats.herokuapp.com/?user=${githubprofile}&"  alt="${githubprofile}" > </p>`}</p>
                        <p>{languse===false? '':`<p align="left"> <img src="https://github-readme-stats.vercel.app/api/top-langs?username=${githubprofile}&show_icons=true&locale=en&layout=compact"  alt="${githubprofile}" >  </p>`}</p>
                        <p>{readmestate===false?'':`<p align="left"> <img src="https://github-readme-stats.vercel.app/api?username=${githubprofile}&show_icons=true&locale=en"  alt="${githubprofile}" ></p>`}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Inputfield;