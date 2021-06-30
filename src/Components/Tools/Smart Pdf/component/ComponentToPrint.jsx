import React from 'react'
import linedPage from "../Images/lined_pages.jpg"
import blankPage from "../Images/blank_page.jfif"
import "./output.css"
export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <div className="print-container" style={{ margin: "0", padding: "0" }}>
        {
          this.props.finalpdf.map((item) => (
            <>
            {this.props.pagestyle === 'blankPage' ?
            <>
            <div style={{ position: 'relative' }} >
                
                <p style={{position: 'absolute', zIndex: '10', fontSize: `${2+this.props.fontsize}px`, color: 'transparent',textShadow:`0 0 1.9px ${this.props.fontcolor}`,right:'10%',top:'2%',  fontWeight: `${this.props.fontweight}`, fontFamily: `${this.props.fontstyle}`}}> {this.props.rollno} </p>
                <p style={{position: 'absolute', zIndex: '10', fontSize: `${2+this.props.fontsize}px`, color: 'transparent',textShadow:`0 0 1.9px ${this.props.fontcolor}`,right:'10%',top:'4%',  fontWeight: `${this.props.fontweight}`, fontFamily: `${this.props.fontstyle}`}}> {this.props.studentname} </p>
                <p style={{ position: 'absolute', zIndex: '10', fontSize: `${2+this.props.fontsize}px`, color: 'transparent',textShadow:`0 0 1.9px ${this.props.fontcolor}`, fontWeight: `${this.props.fontweight}`, paddingLeft: `${20}px`, paddingTop: `${70}px`, lineHeight: `${35 + (this.props.fontsize/16) }px`,  fontFamily: `${this.props.fontstyle}`}} >{item}</p>
                <img src={blankPage} style={{ width: '100%',height:'100vh'}} alt="" />
              </div>
              <div className="page-break" />
            </>
            : 
            <>
            <div style={{ position: 'relative' }} >
                <p style={{position: 'absolute', zIndex: '10', fontSize: `${2+this.props.fontsize}px`, color: 'transparent',textShadow:`0 0 1.9px ${this.props.fontcolor}`,right:'30%',top:'5%', fontWeight: `${this.props.fontweight}`,  fontFamily: `${this.props.fontstyle}`}}> {this.props.rollno} </p>
                <p style={{position: 'absolute', zIndex: '10', fontSize: `${2+this.props.fontsize}px`, color: 'transparent',textShadow:`0 0 1.9px ${this.props.fontcolor}`,right:'30%',top:'7%', fontWeight: `${this.props.fontweight}`,  fontFamily: `${this.props.fontstyle}`}}> {this.props.studentname} </p>
                <p style={{ position: 'absolute', zIndex: '10', fontSize: `${2+this.props.fontsize}px`, color: 'transparent',textShadow:`0 0 1.9px ${this.props.fontcolor}`, fontWeight: `${this.props.fontweight}`, paddingLeft: `${this.props.marginleft+20}px`, paddingTop: `${this.props.margintop+20}px`, lineHeight: `${35 + (this.props.fontsize/16) }px`,  fontFamily: `${this.props.fontstyle}`}} >{item}</p>
                <img src={linedPage} style={{ width: '100%'}} alt="" />
              </div>
              <div className="page-break" />
            </>
            } 
            </>
          ))
        }
        
      </div>
    );
  }
}