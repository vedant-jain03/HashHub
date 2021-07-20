import React, { useState, useEffect, useContext } from 'react'
import "./homepage.css"
import axios from "axios"
import { Link, useHistory } from "react-router-dom";
import { currentBlog } from "../Contexts/currentBlog"
import { usercontext } from "../Contexts/usercontext";
import Login from "../Forms/Login"

function Card({ src, content, heading, blogdetails, currentblog, setcurrentblog }) {
    const history = useHistory();
    const readblog = () => {
        localStorage.setItem('currentblogdetails',JSON.stringify(blogdetails))
        setcurrentblog(blogdetails);
        history.push('/Blogpage');
    }
    
    return (
        <>
            <div className="blog-card">
                <div className="top">
                    <img src={src} alt="" />
                </div>
                <div className="down">
                    <h2>{heading}</h2>
                    <p>{content} ...</p>
                    <button onClick={readblog}>Read More</button>
                </div>
            </div>
        </>
    )
}
function Homepage() {
    const history = useHistory();
    const { currentindexblog, setcurrentblog } = useContext(currentBlog)
    const { user, setuser, userexist, setuserexist } = useContext(usercontext);
    const [hashhubblogs, sethashhubblogs] = useState([]);
    const [landingpage, setlandingpage] = useState([]);
    const getblogs = async () => {
        const result = await axios.get('https://hashhub-backend.herokuapp.com/Hashhub_blogs');
        const blogs = await result.data;
        sethashhubblogs(blogs);
        console.log(hashhubblogs);
        setlandingpage(blogs[blogs.length - 1]);
        console.log(landingpage)
    }
    const handlesubmit = () => {

        setcurrentblog(landingpage);
        history.push('/Blogpage');
        console.log(landingpage);
    }
    useEffect(() => {

        if(localStorage.getItem('hashhubblogs')){
            sethashhubblogs(JSON.parse(localStorage.getItem('hashhubblogs')))
        }
        if(localStorage.getItem('landingpage')){
            setlandingpage(JSON.parse(localStorage.getItem('landingpage')))
        }
        getblogs();
    }, [])
    useEffect(()=>{
        localStorage.setItem('hashhubblogs',JSON.stringify(hashhubblogs));
        localStorage.setItem('landingpage',JSON.stringify(landingpage)); 
    })
    
    return (<>
        {
            userexist===false?
            <Login />
            :
            <>
            <div id="blog-Mainpage">
            <div className="header">
                <div></div>
                <div style={{marginLeft:'4rem'}} className="right">
                </div>
                <div>
                <button style={{marginRight:'1rem'}} onClick={()=>{history.push('/CreateBlog')}}>Publish the Blog</button>
                </div>
            </div>
                <h2><center>Latest Blog</center></h2>
            <div className="landingpage">
                <img src={landingpage.CoverImage} id="landingPageImg" alt="" />
                <div className="subnav">
                    <h1>{landingpage.heading}</h1>
                    <i><h2>- {landingpage.name === '' ? 'User' : landingpage.name}</h2></i>

                    <p>{landingpage.content}</p>
                    <button onClick={handlesubmit} >Read More</button>
                </div>
            </div>
            <div className="other-blogs">
                <h2><center>More Blogs</center></h2>
                <div className="moreblogs">
                    {
                        hashhubblogs.map((item) => (
                                <Card src={item.CoverImage} content={item.content} heading={item.heading} blogdetails={item} currentBlog={currentindexblog} setcurrentblog={setcurrentblog} />
                        ))
                    }
                </div>
            </div>
        </div>
        </>
        }
        </>
    )
}

export default Homepage;