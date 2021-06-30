import React,{useState} from 'react'
import "./Homepage.css"
import Inputsection from './Inputsection';
import Code from './Code';
import Preview from './Preview';

function Homepage() {
    const [activepage,setpage]=useState("input");
    // Hooks 
    const [logo,setlogo]=useState('');
    const [heading,setheading]=useState('');
    const [tag1,settag1]=useState({
        left:'',
        right: ''
    })
    const [tag2,settag2]=useState({
        left:'',
        right: ''
    })
    const [tag3,settag3]=useState({
        left:'',
        right: ''
    })
    const [tag4,settag4]=useState({
        left:'',
        right: ''
    })
    const [tag5,settag5]=useState({
        left:'',
        right: ''
    })
    const [tag6,settag6]=useState({
        left:'',
        right: ''
    })
    //Desc
    const [overview,setoverview]=useState('');
    const [motive,setmotive]=useState('');
    //Features
    const [features,setfeatures]=useState("");
    const [feat,setfeat]=useState([]);
    const addfeatures=()=>{
        setfeat((olditem)=>{
            return [...olditem,features]
        })
        setfeatures('');
    }
    const deletefeatures=(id)=>{
        setfeat((olditem)=>{
            return olditem.filter((arrele,index)=>{
                return index!==id;
            })
        })
    }
    //Tech Stack
    const [tech,settech]=useState("");
    const [techlist,settechlist]=useState([]);
    const addtech=()=>{
        settechlist((olditem)=>{
            return [...olditem,tech]
        })
        settech('');
    }
    const deletetech=(id)=>{
        settechlist((olditem)=>{
            return olditem.filter((arrele,index)=>{
                return index!==id;
            })
        })
    }
    //screenshots
    const [photo,setphoto]=useState('');
    const [photos,setphotos]=useState([]);
    const addphoto=()=>{
        setphotos((olditem)=>{
            return [...olditem,photo];
        })
        setphoto("");
    }
    const deletephoto=(id)=>{
        setphotos((olditem)=>{
            return olditem.filter((arrele,index)=>{
                return index!==id;
            })
        })
    }
    //
    const [cont,setcont]=useState(false);
    const [conc,setconc]=useState('');
    const [repo,setrepo]=useState();
    const [github,setgithub]=useState('');
    return (
        <div id="markdown" >
            <div className="header">
                <h3>Hash/Hub</h3>
                <h1>Github Repository Readme-Md Generator</h1>
                <div className="button">
                    <a href="https://github.com/vedant-jain03/Repo-Readme-Md-Generator" >Contribute</a>
                    <a href="https://github.com/vedant-jain03/Repo-Readme-Md-Generator">Give us Star</a>
                </div>
            </div>
            <div className="sections">
                <div className="navbar">
                    <h2 className={activepage==='input'?'active':""} onClick={()=>setpage('input')}  >Input</h2>
                    <h2 className={activepage==='preview'?'active':""} onClick={()=>setpage('preview')} >Preview</h2>
                    <h2 className={activepage==='code'?'active':""} onClick={()=>setpage('code')} >Readme Code</h2>
                </div>
                <div id="active-section">
                    {activepage==='input'? <Inputsection 
                    logo={logo}
                    setlogo={setlogo}
                    heading={heading}
                    setheading={setheading}
                    tag1={tag1}
                    settag1={settag1}
                    left1={tag1.left}
                    right1={tag1.right}
                    tag2={tag2}
                    settag2={settag2}
                    left2={tag2.left}
                    right2={tag2.right}
                    tag3={tag3}
                    settag3={settag3}
                    left3={tag3.left}
                    right3={tag3.right}
                    tag4={tag4}
                    settag4={settag4}
                    left4={tag4.left}
                    right4={tag4.right}
                    tag5={tag5}
                    settag5={settag5}
                    left5={tag5.left}
                    right5={tag5.right}
                    tag6={tag6}
                    settag6={settag6}
                    left6={tag6.left}
                    right6={tag6.right}
                    features={features}
                    setfeatures={setfeatures}
                    feat={feat}
                    setfeat={setfeat}
                    addfeatures={addfeatures}
                    deletefeatures={deletefeatures}
                    tech={tech}
                    settech={settech}
                    techlist={techlist}
                    settechlist={settechlist}
                    addtech={addtech}
                    deletetech={deletetech}
                    overview={overview}
                    setoverview={setoverview}
                    motive={motive}
                    setmotive={setmotive}
                    conc={conc}
                    setconc={setconc}
                    photo={photo}
                    setphoto={setphoto}
                    photos={photos}
                    setphotos={setphotos}
                    addphoto={addphoto}
                    deletephoto={deletephoto}
                    cont={cont}
                    setcont={setcont}
                    repo={repo}
                    setrepo={setrepo}
                    github={github}
                    setgithub={setgithub}
                    /> : null}
                    {activepage==='preview'? <Preview 
                    logo={logo}
                    heading={heading}
                    tag1={tag1}
                    tag2={tag2}
                    tag3={tag3}
                    tag4={tag4}
                    tag5={tag5}
                    tag6={tag6}   
                    feat={feat}
                    overview={overview}     
                    motive={motive}
                    techlist={techlist}
                    photos={photos}
                    conc={conc}
                
                    /> : null}
                    {activepage==='code'? <Code
                    logo={logo}
                    heading={heading}
                    tag1={tag1}
                    tag2={tag2}
                    tag3={tag3}
                    tag4={tag4}
                    tag5={tag5}
                    tag6={tag6}   
                    feat={feat}
                    overview={overview}     
                    motive={motive}
                    techlist={techlist}
                    conc={conc}
                    photos={photos}
                    repo={repo}
                    github={github}
                    cont={cont}
                     /> : null}
                </div>
            </div>
        </div>
    )
}

export default Homepage
