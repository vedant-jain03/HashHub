import React from 'react'

function Tagbox({ number, tag, settag, left, right }) {
    return (
        <div className="tag-box">
            <h3>Tag {number}</h3>
            <div>
                <input type="text" placeholder="left" value={left} onChange={e => { settag({ ...tag, left: e.target.value }) }} />
                <input type="text" placeholder="right" value={right} onChange={e => { settag({ ...tag, right: e.target.value }) }} />
            </div>
        </div>
    )
}
function Features({ item, index, deletefeatures }) {
    return (
        <div>
            <li>{item}</li>
            <button onClick={() => deletefeatures(index)}>x</button>
        </div>
    )
}
function Photo({ item, index, deletephoto }) {
    return (
        <div style={{ position: 'relative', marginRight: '1rem', marginBottom: '1rem', overflow: 'visible' }}>
            <img style={{ maxWidth: '7rem' }} src={item} alt="" />
            <button onClick={() => deletephoto(index)} style={{ position: 'absolute', right: '-5px', top: '-10px' }} >x</button>
        </div>
    )
}
function Inputsection({ logo, setlogo, heading, setheading, tag1, settag1, left1, right1, tag2, settag2, left2, right2, tag3, settag3, left3, right3, tag4, settag4, left4, right4, tag5, settag5, left5, right5, tag6, settag6, left6, right6, features, setfeatures, feat, setfeat, addfeatures, deletefeatures, tech, settech, techlist, settechlist, addtech, deletetech, overview, setoverview, motive, setmotive, conc, setconc,photo, setphoto, photos, setphotos, addphoto, deletephoto ,cont,setcont,repo,setrepo,github,setgithub}) {
    return (
        <div className="inputsection section">
            <div className="input-field">
                <h3>Heading</h3>
                <input type="text" placeholder="Enter your logo URL" value={heading} onChange={e => setheading(e.target.value)} />
            </div>
            <div className="input-field">
                <h3>Logo URL</h3>
                <input type="text" placeholder="Enter your logo URL" value={logo} onChange={e => setlogo(e.target.value)} />
            </div>
            <h1 className="heading">Tags</h1>
            <div className="tag">
                <Tagbox number={1} tag={tag1} settag={settag1} left={left1} right={right1} />
                <Tagbox number={2} tag={tag2} settag={settag2} left={left2} right={right2} />
                <Tagbox number={3} tag={tag3} settag={settag3} left={left3} right={right3} />
                <Tagbox number={4} tag={tag4} settag={settag4} left={left4} right={right4} />
                <Tagbox number={5} tag={tag5} settag={settag5} left={left5} right={right5} />
                <Tagbox number={6} tag={tag6} settag={settag6} left={left6} right={right6} />
            </div>
            <h1 className="heading">Description</h1>
            <div className="input-field text-area">
                <h3>Overview</h3>
                <textarea type="text" placeholder="Enter your logo URL" value={overview} onChange={e => setoverview(e.target.value)} />
            </div>
            <div className="input-field text-area">
                <h3>Motive</h3>
                <textarea type="text" placeholder="Enter your logo URL" value={motive} onChange={e => setmotive(e.target.value)} />
            </div>
            <div className="input-field feature">
                <div className="up">
                    <h3>Features</h3>
                    <input type="text" placeholder="Enter your logo URL" value={features} onChange={e => setfeatures(e.target.value)} />
                    <button onClick={addfeatures}>Add</button>
                </div>
                {feat.length === 0 ? null : <div className="down">
                    {feat.map((item, index) => {
                        return (
                            <Features item={item} index={index} deletefeatures={deletefeatures} />
                        )
                    })}
                </div>}
            </div>
            <div className="input-field feature">
                <div className="up">
                    <h3 style={{ marginRight: '63px' }} >Tech. Stack</h3>
                    <input type="text" placeholder="Enter your logo URL" value={tech} onChange={e => settech(e.target.value)} />
                    <button onClick={addtech} >Add</button>
                </div>
                {techlist.length === 0 ? null : <div className="down">
                    {techlist.map((item, index) => {
                        return (
                            <Features item={item} index={index} deletefeatures={deletetech} />
                        )
                    })}
                </div>}
            </div>
            <div className="input-field feature">
                <div className="up">
                    <h3 style={{ marginRight: '51px' }} >Screenshots</h3>
                    <input type="text" placeholder="Enter your Screenshots URL" value={photo} onChange={e => setphoto(e.target.value)} />
                    <button onClick={addphoto} >Add</button>
                </div>
                {photos.length === 0 ? null : <div className="down" style={{ display: 'flex', flexWrap: 'wrap' }} >
                    {photos.map((item, index) => {
                        return (
                            <Photo item={item} index={index} deletephoto={deletephoto} />
                        )
                    })}
                </div>}
            </div>

            <div className="input-field text-area">
                <h3>Conclusion</h3>
                <textarea type="text" placeholder="Enter Conclusion" value={conc} onChange={e => setconc(e.target.value)} />
            </div>
            <div className="input-field cont-guide">
                <label htmlFor="cont" ><h3>Contribution Steps</h3></label>
                <input type="checkbox" id="cont" checked={cont === true ? true : false} onClick={e => { setcont(!cont) }} style={{margin:'0 1rem',width:'auto'}} /><br /><br />
                <input type="text" placeholder="Github UserName" className="newinput" value={github} onChange={e => setgithub(e.target.value)}  />
                <input type="text" placeholder="Github Repository Name" className="newinput" value={repo} onChange={e => setrepo(e.target.value)}  />
            </div>
        </div>
    )
}

export default Inputsection