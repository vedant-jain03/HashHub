import React, { useState, useContext, useEffect } from 'react'
import "./bloginput.css"
import { usercontext } from "../Contexts/usercontext";
import axios from "axios"
import marked from "marked"
import { Link, useHistory } from "react-router-dom";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { IconButton } from '@material-ui/core'
function Preview({ CoverImage, heading, tags, content }) {
    const { user, setuser, userexist, setuserexist } = useContext(usercontext);
    return (
        <div className="preview">
            {
                (!heading || !tags || !content || !CoverImage) ? <h1>Preview here... Input all the Fields</h1> :

                    <>
                        <h1 style={{ fontSize: '3rem' }}><center>{heading}</center></h1>
                        <div className="subnav">
                            <h2>- {user.name} |</h2>
                            <IconButton>
                                <FavoriteBorderIcon></FavoriteBorderIcon>
                            </IconButton>
                            <span>0</span>
                            {tags.length === 0 ? null : <div className="tags">{
                                tags.map((item) => (
                                    <span>{item}</span>
                                ))
                            }</div>}
                        </div>
                        {CoverImage===''?null:<img id="coverimage" src={CoverImage} alt="" />}
                        {content===null?null:
                        <p dangerouslySetInnerHTML={{ __html: marked(content) }} ></p>}
                    </>
            }
        </div>
    )
}

function Bloginput() {
    const history = useHistory();
    const { user, setuser, userexist, setuserexist } = useContext(usercontext);
    const [CoverImage, setcoverimage] = useState('');
    const [preview, setpreview] = useState(false);
    const [heading, setheading] = useState('');
    const [tag, settag] = useState();
    const [tags, settags] = useState([]);
    const [content, setcontent] = useState();
    const additem = () => {
        settags((old) => {
            return [...old, tag];
        })
        settag('');
    }
    useEffect(() => {
        console.log(user);
    }, [])
    const submit = async (e) => {
        e.preventDefault();
        if(!heading || !tags || !content || !CoverImage){
            return window.alert('Empty Inputs');
        }
        const email = user.email;
        const name = user.name;
        const res = await axios.post('https://hashhub-backend.herokuapp.com/createBlog', { email, name, CoverImage, heading, tags, content });
        if (res.status === 200) {
            window.alert('Blog is Successfully Publish!!!');
        }
        else {
            window.alert('Something Went Wrong');
        }
        history.push('/Blogs')
    }
    return (
        <div id="bloginput">
            <div className="header">
                <div></div>
                <div style={{ marginLeft: '4rem' }} className="right">
                    <h2>Publish Your Own Blog</h2>
                </div>
                <div>
                    <button onClick={submit}>Publish</button>
                </div>
            </div>
            <div className="main">
                <div className="nav">
                    <h3 className={preview === false ? "active" : ""} onClick={e => setpreview(false)}>Edit</h3>
                    <h3 className={preview === true ? "active" : ""} onClick={e => setpreview(true)}>Preview</h3>
                </div>
                {
                    preview === false ?
                        <div className="input">
                            <div className="inputImage">
                                <input type="text" placeholder="Add Cover Image..." value={CoverImage} onChange={e => setcoverimage(e.target.value)} />
                            </div>
                            <input className="title" type="text" placeholder="Title of the Post Here..." value={heading} onChange={e => setheading(e.target.value)} />
                            <div className="inputImage">
                                <input type="text" placeholder="Add tags..." value={tag} onChange={e => settag(e.target.value)} autoFocus="true" />
                                <button onClick={additem}>Add</button>
                            </div>

                            <div className="outputtags">
                                {
                                    tags.map((item) => (
                                        <span>{item}</span>
                                    ))
                                }
                            </div>
                            <textarea name="" id="" cols="30" rows="10" style={{ whiteSpace: 'pre-wrap' }} placeholder="Add your content here..." value={content} onChange={e => setcontent(e.target.value)} ></textarea>
                        </div>
                        :
                        <Preview CoverImage={CoverImage} heading={heading} tags={tags} content={content} />
                }
            </div>
        </div>
    )
}

export default Bloginput
