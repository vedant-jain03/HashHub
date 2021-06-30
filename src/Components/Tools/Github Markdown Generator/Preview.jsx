import React from 'react'
import "./Homepage.css"
function Preview({logo,heading,tag1,tag2,tag3,tag4,tag5,tag6,feat,overview,motive,techlist,conc,photos}) {
    return (
        <div className="preview section">
            {logo===''?null:<center><img src={logo} alt="" /></center>}
            {heading===''? null:<>  <h1>{heading}</h1> <hr /> <br /> </> }
            <div className="tagpreview">
                {tag1.left===''?null:<img src={`https://img.shields.io/badge/${tag1.left}-${tag1.right}-yellow`} alt="" />}
                {tag2.left===''?null:<img src={`https://img.shields.io/badge/${tag2.left}-${tag2.right}-green`} alt="" />}
                {tag3.left===''?null:<img src={`https://img.shields.io/badge/${tag3.left}-${tag3.right}-blue`} alt="" />}
                {tag4.left===''?null:<img src={`https://img.shields.io/badge/${tag4.left}-${tag4.right}-orange`} alt="" />}
                {tag5.left===''?null:<img src={`https://img.shields.io/badge/${tag5.left}-${tag5.right}-pink`} alt="" />}
                {tag6.left===''?null:<img src={`https://img.shields.io/badge/${tag6.left}-${tag6.right}-red`} alt="" />}
            </div>
            <br /><br />
            {overview===''?null:<>
            <h2>Overview 🔨 </h2>
            
            <hr />
            <br />
            <p>{overview}</p>
            <br /><br />
            </>}
            {motive===''?null:
            <><h2>Motive 🌏 </h2>
            <hr />
            <br />
            <p>{motive}</p>
            <br /><br />
            </>}
            {feat.length===0 ?null:<><h2>Features 🔑 </h2>
           
            <hr />
            <br />
            {
                feat.map((item)=>(
                    <li>{item}</li>
                ))
            }
            <br /><br /></>}
            {techlist.length===0?null:<><h2>Technology Used 🖥️ </h2>
            
            <hr />
            <br />
            {
                techlist.map((item)=>(
                    <li>{item}</li>
                ))
            }
            <br /><br /></>}
            {photos.length===0?null:<><h2>Screenshot 📸 </h2>
            <hr />
            <br />
            {
                photos.map((item)=>(
                    <img style={{maxWidth:'100%',marginRight:'1rem',marginTop:'1rem'}} src={item} alt="" />
                ))
            }
            <br /><br /></>}
            
            {conc===''?null:<><h2>Conclusion ❤️ </h2>
            
            <hr />
            <br />
            {conc}</>}
        </div>
    )
}

export default Preview
