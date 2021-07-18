import React, { useState, useContext, useEffect } from 'react'
import "./blogpage.css"
import { Link , useHistory} from "react-router-dom";
import { currentBlog } from "../Contexts/currentBlog"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { IconButton } from '@material-ui/core'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import axios from "axios";
import marked from "marked"

function Blogpage() {
    const history = useHistory();
    const { currentindexblog, setcurrentblog } = useContext(currentBlog);
    const [likes, setlikes] = useState(currentindexblog.likes);
    const [dislikes, setdislikes] = useState(currentindexblog.dislikes);

    const likethispost = async (e) => {
        e.preventDefault();
        const currlikes = await currentindexblog.likes + 1;
        setlikes(currlikes);
        const _id = currentindexblog._id
        const result = await axios.patch('https://hashhub-backend.herokuapp.com/likethisBlog', { _id, likes });
        console.log(result);
    }
    return (
        <div id="blogpage">
            <div className="header">
            <div></div>
                <div style={{marginLeft:'4rem'}} className="right">
                </div>
                <div>
                <button style={{marginRight:'1rem'}} onClick={()=>{history.push('/CreateBlog')}}>Publish the Blog</button>
                </div>
            </div>
            <div className="main">
            <div className="main-blog">
                <h1 style={{fontSize:'3rem'}}><center>{currentindexblog.heading}</center></h1>
                <div className="subnav">
                <h2>- {currentindexblog.name} |</h2>
                    <IconButton onClick={likethispost} >
                        <FavoriteBorderIcon></FavoriteBorderIcon>
                    </IconButton>
                    <span>{likes}</span>
                    {currentindexblog.tags===0?null:<div className="tags">{
                        currentindexblog.tags.map((item) => (
                            <span>{item}</span>
                        ))
                    }</div>}
                </div>
                <img id="coverimage" src={currentindexblog.CoverImage} alt="" />
                <p dangerouslySetInnerHTML={{ __html: marked(currentindexblog.content) }} ></p>
            </div>
            </div>
        </div>
    )
}

export default Blogpage