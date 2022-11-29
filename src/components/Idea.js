import React from "react";
import info from "../info.json"
import "../css/styles.css"
import { Link } from 'react-router-dom' ; 



const Idea = () => {

    return (

        info.map(e=> 
            
            <div key={e.id} className="container-project project-card">
                    <img src= {e.img} alt="personal-card" loading="lazy" className="project-pic"/>
                    <h3 className="projec-title"> {e.nombre} </h3>
                    <p className="project-details"> {e.description} </p>
                    <Link to="https://marianelacalleri.github.io/Tarjetadepresentacion/" rel="noopener" target='_blank'> {e.action} </Link>
            </div>
            
            )
    )
}

export default Idea()
