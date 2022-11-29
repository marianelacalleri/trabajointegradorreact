import "../css/styles.css";
import { Link } from 'react-router-dom' ;
import project1 from "../images/project1.png"

export function Projects() {
    return (
        <div className="projects" id="projects">
            <h2 className="project-title">My recent projects</h2>
            <div className="container-all-projects">
                <div className="container-project project-card">
                    <img src= {project1} alt="personal-card" loading="lazy" className="project-pic"/>
                    <h3 className="projec-title">Personal Card</h3>
                    <p className="project-details">Interactive personal card, with some HTML5 and CSS3</p>
                    <Link to="https://marianelacalleri.github.io/Tarjetadepresentacion/" rel="noopener" target='_blanck'> Check it out! </Link>
                </div>
            </div>
        </div>
    )
}