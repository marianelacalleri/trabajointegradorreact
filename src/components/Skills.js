import "../css/styles.css";

import photo1 from "../images/html5.svg"
import photo2 from "../images/css3.svg"
import photo3 from "../images/javascript.svg"
import photo4 from "../images/python.svg"
import photo5 from "../images/vue.svg"
import photo6 from "../images/figma.svg"
import photo7 from "../images/react.svg"


export function Skills() {
    return (
        <div className="skills" id="skills">
            <h2 className="header-skills">My Best Skills</h2>
            <div className="container-skills">
                <div className="first-set animate__animated animate__pulse">
                    <img src= {photo1} alt="html5" loading="lazy" className="icon icon-card"/>
                    <img src= {photo2} alt="css3" loading="lazy" className="icon icon-card"/>
                    <img src= {photo3} alt="javascript" loading="lazy" className="icon icon-card"/>
                </div>

                <div className="second-set animate__animated animate__pulse">
                    <img src= {photo4} alt="python" loading="lazy" className="icon icon-card"/>
                    <img src= {photo5} alt="vue" loading="lazy" className="icon icon-card"/>
                    <img src= {photo6} alt="figma" loading="lazy" className="icon icon-card"/>
                </div>
            </div>
            
            <h2 className="header-skills">Currently learning</h2>
            <div className="container-skills">
            <img src= {photo7} alt="react" loading="lazy" className="icon icon-card"/>
            </div>

        </div>
    )
}