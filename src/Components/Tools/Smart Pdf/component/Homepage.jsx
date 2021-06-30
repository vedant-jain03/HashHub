import React, { useState, useRef } from 'react'
import "./Homepage.css"
import linedPage from "../Images/lined_pages.jpg"
import blankPage from "../Images/blank_page.jfif"
import DeleteIcon from '@material-ui/icons/Delete';
import { useReactToPrint } from 'react-to-print';
import { ComponentToPrint } from './ComponentToPrint';

function Preview({ key, show, pageNumber, pagestyle, fontsize, fontcolor, fontweight, marginleft, margintop, lineheight, fontstyle, finalpdf, setfinalpdf }) {
    const [pageadded, setaddpage] = useState(false);
    const [pdfpage, setpdfpage] = useState("");

    const addpage = () => {
        setfinalpdf((olditem) => {
            return [...olditem, pdfpage]
        })
        setaddpage(true);
        console.log(finalpdf)
    }
    return (
        <div className="input-page left" style={{ display: (show === true) ? 'flex' : 'none' }} >
            <button className="add-page" onClick={addpage} >Add this Page</button>
            <p style={{display:`${pageadded?'block':'none'}`,color:'#22e5a9',marginBottom:'1rem'}} >Page Added!!!</p>
            {
                (pagestyle === 'blankPage' ?
                    <textarea name="" id="" cols="30" rows="10" style={{ fontSize: `${fontsize}px`, color: `${fontcolor}`, fontWeight: `${fontweight}`, paddingLeft: `${20}px`, paddingTop: `${20}px`, lineHeight: `${lineheight}`, fontFamily: `${fontstyle}`, backgroundImage: `url(${pagestyle === 'blankPage' ? blankPage : linedPage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', overflow: 'hidden' }}
                        placeholder="Type Here or Copy Paster Here!!!"
                        value={pdfpage}
                        onChange={e => setpdfpage(e.target.value)}
                    ></textarea> : <textarea name="" id="" cols="30" rows="10" style={{ fontSize: `${fontsize}px`, color: `${fontcolor}`, fontWeight: `${fontweight}`, paddingLeft: `${marginleft}px`, paddingTop: `${margintop}px`, lineHeight: `${lineheight}`, fontFamily: `${fontstyle}`, backgroundImage: `url(${pagestyle === 'blankPage' ? blankPage : linedPage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', overflow: 'hidden' }}
                    placeholder="Type Here or Copy Paster Here!!!"
                        value={pdfpage}
                        onChange={e => setpdfpage(e.target.value)}
                    ></textarea>)
            }
            {/* <textarea name="" id="" cols="30" rows="10" style={{ fontSize: `${fontsize}px`, color: `${fontcolor}`, fontWeight: `${fontweight}`, paddingLeft: `${20}px`, paddingTop: `${20}px`, lineHeight: `${lineheight}`, fontFamily: `${fontstyle}`, backgroundImage: `url(${pagestyle === 'blankPage' ? blankPage : linedPage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', overflow: 'hidden' }}
                value={pdfpage}
                onChange={e => setpdfpage(e.target.value)}
            ></textarea> */}
        </div>
    )
}
function Homepage() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const [fontstyle, setfontstyle] = useState("Indie Flower,cursive");
    const [fontsize, setfontsize] = useState(16);
    const [fontcolor, setfontcolor] = useState("#16264c");
    const [fontweight, setfontweight] = useState("Normal");
    const [pagestyle, setpagestyle] = useState();
    const [marginleft, setmarginleft] = useState(90)
    const [margintop, setmargintop] = useState(120);
    const [lineheight, setlineheight] = useState(1.86);
    const [numberofPages, setnumberofPages] = useState(1);
    const [finalpdf, setfinalpdf] = useState([]);
    const [currentpage, setcurrentpage] = useState(1);
    const [printpdf, setprintpdf] = useState(false);
    const [studentname, setstudentname] = useState('');
    const [rollno, setrollno] = useState("");
    const deletepage = (index) => {
        setfinalpdf((olditem) => {
            return olditem.filter((item, id) => { return index !== id })
        })
    }
    return (<>
    <div className="mobile-view">
        <span>Responsive for Desktop Only.</span> 
        <h1>Hash/Hub</h1>
    </div>
    <div id="smartpdf">
            <div className="header">
                <h3>Hash/Hub</h3>
                <h2>Smart PDF</h2>
                <div className="buttons">
                    <a href="https://github.com/vedant-jain03/smart-pdf">Contribute</a>
                    <a href="https://github.com/vedant-jain03/smart-pdf">Give us Star</a>
                </div>
            </div>
            <div className="main">
                <div className="navbar">
                    <div className="inputfield fontstyle">
                        <h2>Font Style</h2>
                        <select name="" value={fontstyle} onChange={e => setfontstyle(e.target.value)} >
                            <option style={{ fontFamily: 'Indie Flower,cursive' }} value="Indie Flower,cursive">Indie Flower</option>
                            <option style={{ fontFamily: 'Caveat, cursive' }} value="Caveat, cursive">Caveat</option>
                            <option style={{ fontFamily: 'Shadows Into Light, cursive' }} value="Shadows Into Light">Shadows Into Light</option>
                            <option style={{ fontFamily: 'Homemade Apple' }} value="Homemade Apple">Homemade Apple</option>
                            <option style={{ fontFamily: 'Nanum Pen Script' }} value="Nanum Pen Script">Nanum Pen Script</option>
                            <option style={{ fontFamily: 'Kalam' }} value="Kalam">Kalam</option>
                        </select>
                    </div>
                    {/* <div className="inputfield fontstyle">
                        <h2>Font Size</h2>
                        <div className="box-buttons">
                            <button onClick={() => setfontsize(fontsize - 1)} >-</button>
                            <input type="number" max="30" value={fontsize} />
                            <button onClick={() => setfontsize(fontsize + 1)}>+</button>
                        </div>
                    </div> */}
                    <div className="inputfield fontstyle">
                        <h2>Font Color</h2>
                        <input type="text" value={fontcolor} onChange={e => setfontcolor(e.target.value)} />
                    </div>
                    <div className="inputfield fontstyle">
                        <h2>Font Weight</h2>
                        <select name="" value={fontweight} onChange={e => setfontweight(e.target.value)} >
                            <option value="normal">Normal</option>
                            <option value="bold">Bold</option>
                        </select>
                    </div>
                    <div className="inputfield fontstyle">
                        <h2>Page Style</h2>
                        <select name="" value={pagestyle} onChange={e => setpagestyle(e.target.value)} >
                            <option value="linedPage">Lined Page</option>
                            <option value="blankPage">Blank Page</option>
                        </select>
                    </div>
                </div>
                {/* Bottom */}
                <div className="inputfield fontstyle PageNumberInput">
                    <h2>Number of Pages</h2>
                    <div className="box-buttons">
                        <button onClick={() => setnumberofPages(numberofPages - 1 > 0 ? numberofPages - 1 : 1)} >-</button>
                        <input type="number" max="50" value={numberofPages} placeholder="Enter Number of Pages You wanted" />
                        <button onClick={() => setnumberofPages(numberofPages + 1)}>+</button>
                    </div>
                </div>
                <div className="page_number_navbar">
                    <button onClick={() => setcurrentpage(currentpage - 1 > 0 ? currentpage - 1 : 1)}> Prev </button>
                    <p> Page Number: {currentpage}/{(numberofPages === '0' || numberofPages === '') ? 1 : numberofPages} </p>
                    <button onClick={() => setcurrentpage((currentpage + 1 > numberofPages) ? numberofPages : currentpage + 1)} > Next </button>
                </div>

                <div>
                    {
                        [...Array(numberofPages)].map((item, index) => (
                            <Preview
                                key={index}
                                show={index + 1 === currentpage}
                                pageNumber={index + 1}
                                pagestyle={pagestyle}
                                fontsize={fontsize}
                                fontcolor={fontcolor}
                                fontweight={fontweight}
                                marginleft={marginleft}
                                margintop={margintop}
                                lineheight={lineheight}
                                fontstyle={fontstyle}
                                finalpdf={finalpdf}
                                setfinalpdf={setfinalpdf}
                            />
                        ))
                    }
                </div>
                <div className="page_number_navbar">
                    <div className="inputfield fontstyle">
                        <h2>Student Name</h2>
                        <input type="text" value={studentname} onChange={e => setstudentname(e.target.value)} />
                    </div>
                    <div className="inputfield fontstyle">
                        <h2>Roll Number</h2>
                        <input type="text" value={rollno} onChange={e => setrollno(e.target.value)} />
                    </div>
                </div>
                <div className="right">
                    {
                        finalpdf.map((item, index) => (
                            <div className={`${pagestyle==='blankPage'?'blankpage-output output-preview-page ':'output-preview-page '}`}>
                                <img src={pagestyle === 'blankPage' ? blankPage : linedPage} alt="" />
                                <p>{item}</p>
                                <DeleteIcon onClick={() => deletepage(index)} />
                            </div>
                        ))
                    }
                </div>
                <div style={{ display: 'none' }}>
                    <ComponentToPrint
                        pagestyle={pagestyle}
                        fontsize={fontsize}
                        fontcolor={fontcolor}
                        fontweight={fontweight}
                        marginleft={marginleft}
                        margintop={margintop}
                        lineheight={lineheight}
                        fontstyle={fontstyle}
                        finalpdf={finalpdf}
                        finalpdf={finalpdf}
                        rollno={rollno}
                        studentname={studentname}
                        ref={componentRef} />
                </div>
                <button className="print-pdf" onClick={handlePrint}>Get my PDF</button>

            </div>
        </div>
        </>
    )
}

export default Homepage