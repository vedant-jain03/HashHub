import React,{useState,useEffect,useContext} from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./userprofile.css"
import axios from "axios"
import { usercontext } from '../Contexts/usercontext';
function UserBlogs({item}){
    const deletethispost = async(e)=>{

        e.preventDefault();
        const ask = window.confirm("Do you want to Delete this Post?");
        if(ask){
        const _id = item._id;
        console.log(_id);
        const result = await fetch("https://hashhub-backend.herokuapp.com/deletethispost", {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                _id
            })
        });
        console.log(result);
        }
    }
    return(
        <div className="blog-card">
        <div className="top" style={{flex:'0.50',overflow:'hidden',borderRadius:'10px'}}>
            <img src={item.CoverImage} alt="" />
        </div>
        <div className="down"  style={{flex:'0.60'}}>
            <h2>{item.heading}</h2>
            <p>{item.content}</p>
            <div className="buttons">
                <button className="delete" onClick={deletethispost}>Delete</button>
            </div>
        </div>
    </div>
    )
}
function Userprofile() {
    const { user, setuser, userexist, setuserexist } = useContext(usercontext);
    const [userblogs,setuserblogs] = useState([]);
    const getusersblogs = async(e)=>{
        const result = await axios.post('https://hashhub-backend.herokuapp.com/getmyblogs',{email:user.email});
        if(result.status===200){
            const blogs = await result.data;
            setuserblogs(blogs);
        }
    }
    useEffect(()=>{
        getusersblogs();
    })
    return (<>
            <div id="user-profile">
            <h1> <center> User Profile </center> </h1>
            <div className="user-card">
                <AccountCircleIcon />
                <div>
                    <h2>{user.name}</h2>
                    <h4>{user.email}</h4>
                    <h3>Interests: {user.interest}</h3>
                    <h3>Total Blogs Contributed : {userblogs.length}</h3>
                </div>
            </div>
            <h1> <center> Your Blogs </center> </h1>
            <div className="users-blogs">
                {
                    userblogs.length===0?
                    <h1>No Blogs Posted</h1>:
                    userblogs.map((item)=>(
                        <UserBlogs item={item} />
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default Userprofile
